import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMovieDetails, getMoviesBySearchKey } from 'src/services/apiCalls';
import { Header } from './Header';
import { MovieCard } from './MovieCard';
import { MovieDetailsModal } from './MovieDetailsModal';

export interface MovieData {
  id: number;
  poster_path: string;
  onClickHandler: () => void;
}

export interface MovieDetails {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  closeModal: () => void;
}

export const HomePage: FC = () => {
  const [moviesData, setMoviesData] = useState<[] | MovieData[]>([]);
  const [movieDetails, setMoviedetails] = useState<MovieDetails>();
  const [showMovieDetailsModal, setShowMovieDetailsModal] = useState(false);

  useEffect(() => {
    getMovies('friends');
  }, []);

  const getMovies = (searchKey: string): void => {
    getMoviesBySearchKey(searchKey).then((data) => {
      if (data.length > 0) setMoviesData(data);
    });
  };

  const openMovieDetailsModal = (movieId: number): void => {
    getMovieDetails(movieId).then((data) => {
      setMoviedetails(data);
      setShowMovieDetailsModal(true);
    });
  };

  return (
    <div>
      <Header getMoviesBySearchKey={getMovies} inFavoritePage={false} />
      <div className="mt-4 w-full">
        {moviesData.length > 0 ? (
          <div className="flex flex-row flex-wrap justify-around">
            {moviesData.map((movie) => (
              <div key={movie.id}>
                <MovieCard
                  id={movie.id}
                  poster_path={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                  onClickHandler={(): void => openMovieDetailsModal(movie.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="justify-center text-white">
            Oops.... No matching results. Please try with other keywords.
          </div>
        )}
        {showMovieDetailsModal && movieDetails && (
          <MovieDetailsModal
            id={movieDetails.id}
            original_title={movieDetails.original_title}
            overview={movieDetails.overview}
            poster_path={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieDetails.poster_path}`}
            closeModal={(): void => setShowMovieDetailsModal(false)}
          />
        )}
      </div>
    </div>
  );
};