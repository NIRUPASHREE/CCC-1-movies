import { cleanup, render, screen, userEvent } from 'src/utils/test-utils';
import { HomePage } from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

test('identify Home Page components', () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  const homePage = screen.getByTestId('home-page');
  expect(homePage).toBeInTheDocument();
  userEvent.click(screen.getByTestId('link-home'));
  const header = screen.getByTestId('header');
  expect(header).toBeInTheDocument();
});

//yet to do mocking