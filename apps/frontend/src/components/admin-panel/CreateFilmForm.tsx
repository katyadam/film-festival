import React from 'react';
import { z } from 'zod';
import { createFilmSchema } from '../../schemas/filmSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFilmCreate } from '../../app/hooks/use_films';

type CreateFilmFormData = z.infer<typeof createFilmSchema>;

const CreateFilmForm = () => {
  const { mutateAsync: createFilm } = useFilmCreate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFilmFormData>({
    resolver: zodResolver(createFilmSchema),
  });

  const onSubmit: SubmitHandler<CreateFilmFormData> = async (data) => {
    await createFilm(data);
    console.log('Film has been created!', data);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-xl mb-4">Create new film</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Name"
        />
        <input
          {...register('originalName', {
            required: 'Original is required',
          })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Original name"
        />
        <input
          {...register('intro', { required: 'intro is required' })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Link to Intro"
        />
        <input
          {...register('picture', { required: 'picture is required' })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="picture"
          type="file"
        />
        <input
          {...register('publishedAt', { required: 'publishedAt is required' })}
          className="w-full p-2 border border-gray-300 rounded"
          type="date"
        />
        <input
          {...register('runTimeMinutes', {
            required: 'Runtime minutes are required',
          })}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Runtime minutes"
          type="number"
        />
        <select
          className="w-full p-2 border border-gray-300 rounded"
          {...register('categoryID', { required: 'Category is required' })}
        >
          <option value="aa">aa</option>
        </select>
        <button
          type="submit"
          className="mt-4 bg-rose-900 text-white px-4 py-2 rounded-md transform transition-all duration-300 hover:scale-105 hover:cursor-pointer"
        >
          Create
        </button>
      </form>
      <div className="m-2">
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        {errors.originalName && (
          <p className="text-red-500">{errors.originalName.message}</p>
        )}
        {errors.intro && <p className="text-red-500">{errors.intro.message}</p>}
        {errors.picture && (
          <p className="text-red-500">{errors.picture.message}</p>
        )}
        {errors.publishedAt && (
          <p className="text-red-500">{errors.publishedAt.message}</p>
        )}
        {errors.runTimeMinutes && (
          <p className="text-red-500">{errors.runTimeMinutes.message}</p>
        )}
        {errors.categoryID && (
          <p className="text-red-500">{errors.categoryID.message}</p>
        )}
      </div>
    </div>
  );
};

export default CreateFilmForm;
