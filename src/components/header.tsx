import type { FC } from 'react';
import { useState } from 'react';
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

interface HeaderProps {
  getMovies: (searchKey: string) => void;
}

export const Header: FC<HeaderProps> = ({ getMovies }) => {
  const [searchKey, setSearchkey] = useState('');

  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row">
        <div className="ml-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 className="text-white">Movies</h1>
        </div>
        <Link to="/home" className="header-buttons">
          HOME
        </Link>
        <Link to="/favorites" className="header-buttons">
          FAVOURITES
        </Link>
      </div>
      <div className="flex">
        <div className="relative mx-auto w-max place-self-center">
          <input
            type="text"
            name="search"
            value={searchKey}
            placeholder="movie name.."
            className="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border border-transparent bg-transparent pl-12 text-white outline-none duration-300 focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                // setSearchkey(e.target.value);
                console.log("enterr")

              }
            }}
            onChange={(e): void => {
              setSearchkey(e.target.value);
              getMovies(e.target.value);
            }}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="search-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
