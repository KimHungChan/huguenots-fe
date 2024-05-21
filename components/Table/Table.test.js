import Table from './Table';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

it('should render without crashing when provided with valid props', () => {
  const tableData = [
    {
      fundName: 'Fund A',
      primaryTicker: 'A',
      incomeTreatment: 'Treatment A',
      shareClassCurrency: 'USD',
      isin: 'ISIN123',
      strategy: 'Thematic',
      assetClass: 'Large Cap',
      region: 'North America',
      style: 'Active',
    },
  ];
  const { unmount } = render(<Table tableData={tableData} />);
  unmount();
});

it('should update strategy filter state when checkbox is clicked', () => {
  const tableData = [
    {
      fundName: 'Fund A',
      primaryTicker: 'A',
      incomeTreatment: 'Treatment A',
      shareClassCurrency: 'USD',
      isin: 'ISIN123',
      strategy: 'Thematic',
      assetClass: 'Large Cap',
      region: 'North America',
      style: 'Active',
    },
  ];
  const { getByLabelText } = render(<Table tableData={tableData} />);
  const strategyCheckbox = getByLabelText('Thematic');
  fireEvent.click(strategyCheckbox);
  expect(strategyCheckbox.checked).toBe(true);
});
