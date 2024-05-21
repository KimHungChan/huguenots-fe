import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Footer from './Footer';

// Render the footer element with correct class attributes
it('should render the footer with the correct class attributes', () => {
  const { container } = render(<Footer />);
  const footer = container.querySelector('footer');
  expect(footer).toHaveClass(
    'bg-huguenots-blue text-white p-4 px-24 font-ptSans'
  );
});
