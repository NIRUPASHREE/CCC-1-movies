import { cleanup, render, screen } from 'src/utils/test-utils';
import { Header } from '../organisms/Header';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('identify page title', () => {
  render(<Header inFavoritePage={false} />, { wrapper: BrowserRouter });
  const logoTitle = screen.getByTestId('logo-title');
  expect(logoTitle).toBeInTheDocument();
  expect(logoTitle).toHaveTextContent('Movies');
});

test('identify home link', () => {
  render(<Header inFavoritePage={false} />, { wrapper: BrowserRouter });
  const homeLink = screen.getByTestId('link-home');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveTextContent('HOME');
});

test('identify favorites link', () => {
  render(<Header inFavoritePage={false} />, { wrapper: BrowserRouter });
  const homeLink = screen.getByTestId('link-favorites');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveTextContent('FAVOURITES');
});

test('identify search bar in home page, when inFavoritePage is false', () => {
  render(<Header inFavoritePage={false} />, { wrapper: BrowserRouter });
  const searchBar = screen.getByTestId('search-bar');
  expect(searchBar).toBeInTheDocument();
});

test('identify as no search bar in favorites page', () => {
  render(<Header inFavoritePage={true} />, { wrapper: BrowserRouter });
  expect(screen.queryByText('search-bar')).not.toBeInTheDocument();
});
