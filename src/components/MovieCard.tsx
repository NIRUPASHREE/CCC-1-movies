import type { FC } from 'react';
import type { MovieData } from './HomePage';

export const MovieCard: FC<MovieData> = ({
  // id,
  poster_path,
  onClickHandler,
}) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="m-4 box-border h-80 w-60 cursor-pointer rounded-lg border-transparent shadow-lg
    shadow-zinc-300 transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black"
      onClick={(): void => onClickHandler()}
    >
      <img
        src={poster_path}
        alt="movie poster"
        className=" h-80 w-60 rounded-lg border-black "
      />
      {/* <div className="flex flex-row justify-between px-2 pt-4">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // {...isRed ? fill = "red" : fill = "none"}
            fill="none"
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
      </div> */}
    </div>
  );
};
