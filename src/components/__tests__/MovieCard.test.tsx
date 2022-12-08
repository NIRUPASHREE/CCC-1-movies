import { cleanup, render, screen } from 'src/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { MovieCard } from '../morecules/MovieCard';
import { it, expect } from 'vitest';

afterEach(() => {
  cleanup();
});

it('identify movie card', () => {
  const poster_path =
    'https://www.themoviedb.org/t/p/w440_and_h660_face/nKhhDFCdzxeJ3GUunQ570LDpUkz.jpg';
  const func = (): void => {
    console.log('fun');
  };

  render(<MovieCard poster_path={poster_path} onClickHandler={func} id={0} />, {
    wrapper: BrowserRouter,
  });
  const movieCard = screen.getByTestId('movie-card');
  expect(movieCard).toBeInTheDocument();
  expect(screen.getByAltText('movie poster')).toBeInTheDocument();
});
