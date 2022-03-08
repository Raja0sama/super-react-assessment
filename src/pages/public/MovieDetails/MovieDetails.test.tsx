import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieDetails from './MovieDetails';

describe('<MovieDetails />', () => {
  test('it should mount', () => {
    render(<MovieDetails />);
    
    const movieDetails = screen.getByTestId('MovieDetails');

    expect(movieDetails).toBeInTheDocument();
  });
});