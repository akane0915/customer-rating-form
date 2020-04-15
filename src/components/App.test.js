import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  describe('React Testing Library', () => {
    let appComponent;

    beforeEach(() => {
      appComponent = render(<App />);
    });

    it('renders', () => {
      const { getByText } = appComponent;
      const text = getByText(/We love to hear your feedback/i);

      expect(text).toBeInTheDocument();
    });

    describe('ratings', () => {
      it('renders each rating option', () => {
        const { getByText } = appComponent;
        const options = [1, 2, 3, 4, 5];

        options.forEach((option) => {
          const text = getByText(`${option}`);
          expect(text).toBeInTheDocument();
        });
      });
    });

    describe('submit', () => {
      it('sends the correct value', () => {
        const { getByLabelText } = appComponent;
        const submit = getByLabelText('submit');

        fireEvent.change(submit, { target: { value: '3' } });

        expect(submit.value).toBe('3');
      });
    });
  });
});