import { render, screen } from '@testing-library/react';
import App from './App';

const mockProps = {
  currentUser: "test",
  wallet: {},
  contract: "nearSea",
  nearConfig: {},
};

test('renders learn react link', () => {
  render(<App {...mockProps} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
