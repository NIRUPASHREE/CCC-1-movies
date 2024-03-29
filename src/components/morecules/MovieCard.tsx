/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FC } from 'react';
import type { MovieData } from '../pages/HomePage';

export const MovieCard: FC<MovieData> = ({ poster_path, onClickHandler }) => {
  return (
    <div
      className="m-4 box-border h-80 w-60 cursor-pointer rounded-lg border-transparent shadow-lg
    shadow-zinc-300 transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black"
      onClick={(): void => onClickHandler()}
      data-testId="movie-card"
    >
      <img
        src={poster_path}
        alt="movie poster"
        className=" h-80 w-60 rounded-lg border-black "
      />
    </div>
  );
};
