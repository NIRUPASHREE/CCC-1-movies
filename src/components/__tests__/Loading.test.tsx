import { cleanup, render, screen } from 'src/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from '../organisms/Loading';
import { it, expect } from 'vitest';

afterEach(() => {
  cleanup();
});

it('identify Loading', () => {
  render(<Loading />, { wrapper: BrowserRouter });
  expect(screen.getByTitle('loading')).toBeInTheDocument();
  expect(screen.getByTestId('loading-icon')).toBeInTheDocument();
});
