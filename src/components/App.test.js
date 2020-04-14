import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('React Testing Library', () => {
    let appComponent;

    beforeEach(() => {
      appComponent = render(<App />);
    });

    it('renders using react testing library', () => {
      const { getByText } = appComponent;
      const text = getByText(/Hello/i);
      expect(text).toBeInTheDocument();
    });
  });
});