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
      <p className="mb-12">{film.intro}</p>
      <p>Category: {categories?.item.name}</p>
      <p>Length: {film.runTimeMinutes} minutes</p>
      <p>Relase Date: {film.publishedAt}</p>
      <p>
        Director:{' '}
        {film.participants
          .filter((participant) => participant.role === 'DIRECTOR')
          .map((participant) => participant.participant.name + ', ')}
      </p>
      <p>
        Writer:{' '}
        {film.participants
          .filter((participant) => participant.role === 'SCREEWRITER')
          .map((participant) => participant.participant.name + ', ')}
      </p>
      <p>
        Actors:{' '}
        {film.participants
          .filter((participant) => participant.role === 'ACTOR')
          .map((participant) => participant.participant.name + ', ')}
      </p>
    </div>
  );
};

export default Description;
