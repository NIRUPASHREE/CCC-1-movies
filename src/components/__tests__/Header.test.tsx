import { App } from 'src/App';
import { cleanup, render, screen } from 'src/utils/test-utils';

afterEach(() => {
  cleanup();
});

test('identify page title', () => {
  render(<App />);
  const logoTitle = screen.getByTestId('logo-title');
  expect(logoTitle).toBeInTheDocument();
  expect(logoTitle).toHaveTextContent('Movies');
});

test('identify home link', () => {
  render(<App />);
  const homeLink = screen.getByTestId('link-home');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveTextContent('HOME');
});

test('identify favorites link', () => {
  render(<App />);
  const homeLink = screen.getByTestId('link-favorites');
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveTextContent('FAVOURITES');
});

test('identify search bar', () => {
  render(<App />);
  const searchBar = screen.getByTestId('search-bar');
  expect(searchBar).toBeInTheDocument();
});
