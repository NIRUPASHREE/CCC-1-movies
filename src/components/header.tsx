import type { FC } from 'react';
import React from 'react';
import logo from '../assets/movies-logo.png';
import searchIcon from '../assets/search-icon.png';
import './header.css';

export const Header: FC = () => {
  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-row">
        <img src={logo} alt="movie-logo" width={120} />
        <div className="header-buttons">HOME</div>
        <div className="header-buttons">FAVOURITES</div>
      </div>
      <div className="flex">
        <form className="relative mx-auto w-max place-self-center">
          <input
            type="text"
            name="search"
            placeholder="movie name.."
            className="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border border-transparent bg-transparent pl-12 outline-none duration-300 focus:w-full focus:cursor-text focus:border-black focus:pl-16 focus:pr-4"
          />

          <img
            src={searchIcon}
            alt="movie-logo"
            width={20}
            className="search-icon"
          />
        </form>
      </div>
    </div>
  );
};
