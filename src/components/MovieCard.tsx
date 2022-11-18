import type { FC } from 'react';
import React from 'react';
import type { movieList } from './HomePage';

export const MovieCard: FC<movieList> = ({ id, title, poster_path }) => {
  return (
    <div
      className="m-4 box-border h-96 w-60 cursor-pointer rounded-lg border-transparent shadow-lg shadow-zinc-300
    transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black "
    >
      <img
        src={poster_path}
        alt="movie poster"
        className=" h-80 w-60 rounded-lg border-black "
      />
      <div className="flex flex-row justify-between px-2 pt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
