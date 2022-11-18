import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviesBySearchKey } from 'src/services/home-page';
import { Header } from './Header';
import { MovieCard } from './MovieCard';

export interface movieList {
  id: number;
  title: string;
  poster_path: string;
}

export const HomePage: FC = () => {
  const [moviesData, setMoviesData] = useState<[] | movieList[]>([]);

  const getMovies = (searchKey: string): void => {
    getMoviesBySearchKey(searchKey).then((data) => {
      if (data.length > 0) setMoviesData(data);
    });
  };

  useEffect(() => {
    getMovies('friends');
  }, []);

  return (
    <div>
      <Header getMovies={getMovies} />
      <div className=" mt-4 w-full">
        {moviesData.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-around">
            {moviesData.map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  poster_path={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="justify-center text-white">
            Oops.... No matching results. Please try with other keywords.
          </div>
        )}
      </div>
    </div>
  );
};
