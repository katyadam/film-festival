import { useFilms } from '../../app/hooks/use_films';
import FilmCardOrder from './FilmCardOrder';

const FilmsPanel = () => {
  
  const {data: films} = useFilms();

  return (
    <div className="flex flex-col justify-around md:flex-row">
      {films
        .sort((a, b) => b.votes - a.votes)
        .slice(0, 3)
        .map((film, index) => (
          <FilmCardOrder orderNumber={index + 1} film={film} />
        ))}
    </div>
  );
};

export default FilmsPanel;
