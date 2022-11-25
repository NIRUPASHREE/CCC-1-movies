import type { FC } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { useState } from 'react';
import { Dialog, Switch } from '@headlessui/react';
import type { MovieDetails } from './HomePage';

export const MovieDetailsModal: FC<MovieDetails> = ({
  id,
  original_title,
  overview,
  poster_path,
  closeModal,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem('favoriteMovies');
    if (storage !== null) {
      const parsedStorage = JSON.parse(storage);
      const value = parsedStorage.filter((e: { id: number }) => e.id === id);
      if (Boolean(value) && Boolean(value.length)) {
        setEnabled(true);
      }
    }
  }, [id]);

  const favoritesHandler = (value: boolean): void => {
    setEnabled(value);
    const storage = localStorage.getItem('favoriteMovies');
    let parsedStorage;
    if (storage != null) {
      parsedStorage = JSON.parse(storage);
    }
    if (value) {
      parsedStorage.push({ id, poster_path });
      localStorage.setItem('favoriteMovies', JSON.stringify(parsedStorage));
    } else {
      const filteredFavorite = parsedStorage.filter(
        (e: { id: number }) => e.id !== id,
      );
      localStorage.setItem('favoriteMovies', JSON.stringify(filteredFavorite));
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={(): void => {
        setIsOpen(false);
        closeModal();
      }}
      className="relative z-50 "
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black opacity-90" aria-hidden="true" />
      <div className="fixed inset-0 mt-8 flex min-h-max items-center justify-center p-8">
        <div className="flex flex-row">
          <Dialog.Panel className=" w-full max-w-sm rounded bg-black p-4 shadow-xl ">
            <img
              src={poster_path}
              alt="movie poster"
              width={352}
              height={528}
              className="rounded-lg border-black "
            />
            <div className="flex flex-row  items-center justify-center pt-4">
              <div className="pr-4 text-white">
                {enabled ? 'Remove from favorites' : 'Add to favorites'}
              </div>
              <Switch
                checked={enabled}
                onChange={favoritesHandler}
                className={`${
                  enabled ? 'bg-red-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </Dialog.Panel>

          <div className="flex flex-col p-4 text-white ">
            <Dialog.Title className="flex items-center justify-center pt-4 text-2xl text-white">
              {original_title}
            </Dialog.Title>
            <div className="pt-6 text-left">About the movie</div>
            <Dialog.Description className="items-center justify-center pt-2  text-justify">
              {overview}
            </Dialog.Description>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
