import Navbar from './Navbar';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

it('should display user icon with correct src and alt text', () => {
  const { getByAltText } = render(<Navbar />);
  const userIcon = getByAltText('User icon');
  expect(userIcon).toBeInTheDocument();
  expect(userIcon).toHaveAttribute('src', '/Flag_GBx2.png');
});

it('should display text for Professional Investor', () => {
  const { getByText } = render(<Navbar />);
  expect(getByText('Professional Investor')).toBeInTheDocument();
});
