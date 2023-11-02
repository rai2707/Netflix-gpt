import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Use your actual Redux store configuration
import MainContainer from '../components/MainContainer';


const mockStore = configureStore([]);
const initialState = {
  movies: {
    nowPlayingMovies: [
      {
        id: 1,
        original_title: 'Test Movie',
        overview: 'Test Movie Overview',
      },
    ],
  },
};

describe('MainContainer', () => {
  it('renders correctly with movie data', () => {
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );

    // Assertions based on your component's behavior
    expect(getByText('Test Movie')).toBeInTheDocument();
    expect(getByText('Test Movie Overview')).toBeInTheDocument();
  });

  it('renders nothing when movies are not available', () => {
    const store = mockStore({ movies: { nowPlayingMovies: null } });

    const { container } = render(
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );

    // Assertions based on your component's behavior
    expect(container.firstChild).toBeNull();
  });
});
