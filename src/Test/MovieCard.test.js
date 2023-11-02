import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';


describe('MovieCard', () => {
  it('renders a movie card with a poster when posterPath is provided', () => {
    const posterPath = '/example-poster.jpg';

    render(<MovieCard posterPath={posterPath} />);

    // Assert that the movie card is rendered.
    const movieCard = screen.getByAltText('Movie Card');
    expect(movieCard).toBeInTheDocument();

    // Assert that the image source is correct.
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'YOUR_IMG_CDN_URL' + posterPath);
  });

  it('does not render anything when posterPath is not provided', () => {
    render(<MovieCard posterPath={null} />);

    // Assert that nothing is rendered.
    const movieCard = screen.queryByAltText('Movie Card');
    expect(movieCard).not.toBeInTheDocument();
  });
});
