import React, { useState } from 'react';
import { Category } from '@prisma/client';

interface FilmFilterProps {
  categories: { items: Category[] };
  onFilterChange: (filter: {
    searchKey: string;
    votes: number;
    selectedCategoryIds: number[];
  }) => void;
}

const FilmFilter: React.FC<FilmFilterProps> = ({
  categories,
  onFilterChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [votes, setVotes] = useState<number>(0);
  const [selectedCategoryIds, setselectedCategoryIds] = useState<number[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchKey = e.target.value;
    setSearchTerm(searchKey);
    onFilterChange({ searchKey, votes, selectedCategoryIds });
  };

  const handleVotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const votes = parseInt(e.target.value);
    setVotes(votes);
    onFilterChange({ searchKey: searchTerm, votes, selectedCategoryIds });
  };

  const handleCategoryChange = (categoryId: number) => {
    const updatedCategories = selectedCategoryIds.includes(categoryId)
      ? selectedCategoryIds.filter((id) => id !== categoryId)
      : [...selectedCategoryIds, categoryId];
    setselectedCategoryIds(updatedCategories);
    onFilterChange({
      searchKey: searchTerm,
      votes,
      selectedCategoryIds: updatedCategories,
    });
  };

  const handleRemove = () => {
    setSearchTerm('');
    setVotes(0);
    setselectedCategoryIds([]);
    onFilterChange({ searchKey: '', votes: 0, selectedCategoryIds: [] });
  };

  return (
    <div className="text-white text-xl font-semibold grid grid-cols-3 rounded-lg bg-rose-900 p-6 mb-8">
      <div className="col-span-1 flex flex-col gap-4">
        <div className="text-black">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="votes" className="mb-2">
            Votes:
          </label>
          <input
            type="range"
            id="votes"
            min="0"
            max="100"
            value={votes}
            onChange={handleVotesChange}
            className="p-2 w-full"
          />
          <span>{votes}</span>
        </div>
        <div>
          <button
            onClick={handleRemove}
            className="bg-red-500 p-2 rounded text-white w-full"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-4 gap-4 pl-16 ml-16">
        {categories.items.map((category) => (
          <div key={category.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              checked={selectedCategoryIds.includes(category.id)}
              onChange={() => handleCategoryChange(category.id)}
              className="mr-2"
            />
            <label htmlFor={`category-${category.id}`}>{category.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmFilter;
