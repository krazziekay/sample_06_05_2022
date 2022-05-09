import { render, screen } from '@testing-library/react';
import App from './Password';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("This is my App - kAy");
  expect(linkElement).toBeInTheDocument();
});
