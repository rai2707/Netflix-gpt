import React from 'react';
import { render } from '@testing-library/react';
import MovieList from '../components/MovieList';

describe('MovieList Component', () => {
  const movies = [
    { id: 1, poster_path: 'path1' },
    { id: 2, poster_path: 'path2' },
  ];

  it('renders the MovieList component with title and movie cards', () => {
    const { getByText, getAllByTestId } = render(
      <MovieList  title="Movie List" movies={movies} />
    );

    const titleElement = getByText('Movie List');
    const movieCards = getAllByTestId('movie-card');

    expect(titleElement).toBeInTheDocument();
    expect(movieCards).toHaveLength(movies.length);
  });
});
