import { FC } from 'react';
import { FilmCardProps } from '../films-panel/FilmCard';
import { useCategory } from '../../app/hooks/use_categories';
import { usePariticants } from '../../app/hooks/use_participants';

const Description: FC<FilmCardProps> = ({ film }) => {
  const { data: categories } = useCategory(film.categoryID.toString());
  const { data: participants } = usePariticants();

  // TODO
  //const director = participants?.find(participant => participant.role === 'director');
  //const screenwriter = participants?.find(participant => participant.role === 'screenwriter');
  //const actors = participants?.filter(participant => participant.role === 'actor');

  return (
    <div className="m-4 grid text-2xl bg-rose-900 text-white p-6 border border-rose-900 font-semibold rounded-xl">
      <p className="text-6xl">{film.name}</p>
      <p className="text-xl mb-14">{film.originalName}</p>
      <p className="mb-2">Category: {categories?.item.name}</p>
      <p className="mb-2">Run Time: {film.runTimeMinutes} minutes</p>
      <p className="mb-2">Release Date: {film.publishedAt}</p>
      <p className="mb-2">DIRECTOR:</p>
      <p className="mb-2">SCREENWRITER:</p>
      <p className="mb-2">ACTORS:</p>
      {/*actors && actors.map(actor => (
        <p key={actor.id} className="ml-4">{actor.name}</p>
      )) */}
    </div>
  );
};

export default Description;
