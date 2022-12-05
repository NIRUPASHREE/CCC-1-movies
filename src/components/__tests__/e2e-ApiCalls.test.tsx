import { getMovieDetails, getMoviesBySearchKey } from 'src/services/apiCalls';
import { cleanup } from 'src/utils/test-utils';
import { it, expect } from 'vitest';

afterEach(() => {
  cleanup();
});

it('testing getMoviesBySearchKey API with results', () => {
  return getMoviesBySearchKey('friends').then((data) => {
    expect(data.length).toBeGreaterThan(1);
  });
});

it('testing getMoviesBySearchKey API for no results', () => {
  return getMoviesBySearchKey('znt').then((data) => {
    expect(data.length).toBe(0);
  });
});

it('testing getMovieDetails API with results', () => {
  return getMovieDetails(691179).then((data) => {
    expect(data.original_title).toBe('Friends: The Reunion');
  });
});

it('testing getMovieDetails API for no results', () => {
  return getMovieDetails(10).then((data) => {
    expect(data).toBeUndefined();
  });
});
