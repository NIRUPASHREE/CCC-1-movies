import { cleanup, render, screen } from 'src/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { MovieDetailsModal } from '../organisms/MovieDetailsModal';

afterEach(() => {
  cleanup();
});

test('identify movie details modal', () => {
  const poster_path =
    'https://www.themoviedb.org/t/p/w440_and_h660_face/nKhhDFCdzxeJ3GUunQ570LDpUkz.jpg';
  const func = (): void => {
    // something
  };

  render(
    <MovieDetailsModal
      poster_path={poster_path}
      id={0}
      original_title={'some title'}
      overview={'some data'}
      closeModal={func}
    />,
    {
      wrapper: BrowserRouter,
    },
  );
  expect(screen.getByTestId('movi-deatils-modal')).toBeInTheDocument();
  expect(screen.getByAltText('movie poster')).toBeInTheDocument();
  expect(screen.getByRole('switch')).toBeInTheDocument();
  expect(screen.getByTitle('Title')).toBeInTheDocument();
  expect(screen.getByTitle('Description')).toBeInTheDocument();
});
