import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import SecondaryContainer from '../components/SecondaryContainer';

// Mock the useSelector function
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('SecondaryContainer Component', () => {
  beforeEach(() => {
    useSelector.mockReset(); // Reset the mock before each test
  });

  it('renders SecondaryContainer with movie lists', () => {
    // Mock the Redux state
    useSelector.mockImplementation((selector) => {
      const mockState = {
        movies: {
          nowPlayingMovies: [/* Mock movie data */],
          topRatedMovies: [/* Mock movie data */],
          popularMovies: [/* Mock movie data */],
          upcomingMovies: [/* Mock movie data */],
        },
      };
      return selector(mockState);
    });

    const { getByText, queryByText } = render(<SecondaryContainer />);

    expect(getByText('Now Playing')).toBeInTheDocument();
    expect(getByText('Top Rated Movies')).toBeInTheDocument();
    expect(getByText('Popular')).toBeInTheDocument();
    expect(getByText('Top 10 Movie Trending In India')).toBeInTheDocument();
    expect(getByText('Upcoming Movies')).toBeInTheDocument();
    expect(getByText('Horror')).toBeInTheDocument();
    
    // Check for a specific movie title within one of the MovieLists
    expect(queryByText('Sample Movie Title')).toBeInTheDocument();
  });
});
