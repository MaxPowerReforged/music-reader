import NavBar from '../components/navBar';
import { render, screen } from '@testing-library/react';

test('NavBar is mounted and displays Brand and Links', () => {
  render(<NavBar></NavBar>);
  expect(screen.getByText('Music Reader')).toBeInTheDocument();
  expect(screen.getByText('Practise Mode')).toBeInTheDocument();
  expect(screen.getByText('Challenge Mode')).toBeInTheDocument();
});
