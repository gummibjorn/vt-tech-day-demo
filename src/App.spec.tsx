import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders headline', () => {
		render(<App />);

		expect(screen.getByText("Hello Vite + React!")).toBeVisible();
	});
});
