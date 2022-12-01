import { getMovieDetails, getMoviesBySearchKey } from 'src/services/apiCalls';
import { cleanup } from 'src/utils/test-utils';

afterEach(() => {
  cleanup();
});

test('testing getMoviesBySearchKey API with results', () => {
  return getMoviesBySearchKey('friends').then((data) => {
    expect(data.length).toBeGreaterThan(1);
  });
});

test('testing getMoviesBySearchKey API for no results', () => {
  return getMoviesBySearchKey('znt').then((data) => {
    expect(data.length).toBe(0);
  });
});

test('testing getMovieDetails API with results', () => {
  return getMovieDetails(691179).then((data) => {
    expect(data.original_title).toBe('Friends: The Reunion');
  });
});

test('testing getMovieDetails API for no results', () => {
  return getMovieDetails(10).then((data) => {
    expect(data).toBeUndefined();
  });
});
