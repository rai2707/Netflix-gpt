import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import GptSearchBar from '../components/GptSearchBar';

// Mock the openai API module
jest.mock('../utils/openi', () => ({
  chat: {
    completions: {
      create: jest.fn(() =>
        Promise.resolve({
          choices: [
            {
              message: { content: 'Movie1,Movie2,Movie3' },
            },
          ],
        })
      ),
    },
  },
}));

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
  })
);

// Mock Redux store
const mockStore = {
  getState: () => ({ config: { lang: 'en-US' } }),
  dispatch: jest.fn(),
};

describe('GptSearchBar Component', () => {
  it('renders GptSearchBar and handles search', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={mockStore}>
        <GptSearchBar />
      </Provider>
    );

    const searchInput = getByPlaceholderText('Search for movies...');

    fireEvent.change(searchInput, { target: { value: 'Movie Query' } });

    const searchButton = getByText('Search');

    fireEvent.click(searchButton);

    // Wait for the completion of asynchronous operations
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(3); // Three requests for each movie
      expect(mockStore.dispatch).toHaveBeenCalledWith({
        // Assert the action dispatched to the store
        type: 'addGptMovieResult',
        payload: {
          movieNames: ['Movie1', 'Movie2', 'Movie3'],
          movieResults: [[], [], []], // Mocked empty results
        },
      });
    });
  });
});
