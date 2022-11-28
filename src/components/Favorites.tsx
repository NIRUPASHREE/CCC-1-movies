/* eslint-disable react-hooks/exhaustive-deps */
import type { FC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MovieCard } from './MovieCard';
import type { MovieDetails } from './HomePage';
import { getMovieDetails } from 'src/services/apiCalls';
import { MovieDetailsModal } from './MovieDetailsModal';
import { Header } from './Header';

export const Favorites: FC = () => {
  const [movieDetails, setMoviedetails] = useState<MovieDetails>();
  const [showMovieDetailsModal, setShowMovieDetailsModal] = useState(false);
  const [favoriteMovieData, setFavoriteMovieData] = useState(() => {
    const storage = localStorage.getItem('favoriteMovies');
    if (storage !== null) {
      return JSON.parse(storage);
    } else return [];
  });

  useEffect(() => {
    const storage = localStorage.getItem('favoriteMovies');
    if (storage !== null) {
      setFavoriteMovieData(JSON.parse(storage));
    } else setFavoriteMovieData([]);
  }, [localStorage.getItem('favoriteMovies')]);

  const openMovieDetailsModal = (movieId: number): void => {
    getMovieDetails(movieId).then((data) => {
      setMoviedetails(data);
      setShowMovieDetailsModal(true);
    });
  };

  return (
    <div className="  h-full ">
      <Header inFavoritePage={true} />

      <div className=" mt-4 h-full w-full">
        {favoriteMovieData.length > 0 ? (
          <div className="flex flex-row flex-wrap items-start">
            {favoriteMovieData.map(
              (movie: { id: number; poster_path: string }) => (
                <div key={movie.id}>
                  <MovieCard
                    id={movie.id}
                    poster_path={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                    onClickHandler={(): void => openMovieDetailsModal(movie.id)}
                  />
                </div>
              ),
            )}
          </div>
        ) : (
          <div className=" flex justify-center text-white">
            Oops.... No Favorites.
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
