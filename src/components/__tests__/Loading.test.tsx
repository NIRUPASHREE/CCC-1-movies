import { cleanup, render, screen, userEvent } from 'src/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from '../organisms/Loading';

afterEach(() => {
  cleanup();
});

test('identify Loading', () => {
  render(<Loading />, { wrapper: BrowserRouter });
  expect(screen.getByTitle('loading')).toBeInTheDocument();
  expect(screen.findByTestId('loading-icon')).toBeInTheDocument();
});
