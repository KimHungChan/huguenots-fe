type IncomeTreatment = 'Acc' | 'Dist' | 'Inc' | 'Other';

export type Strategy =
  | 'Thematic'
  | 'Factors'
  | 'Equity Income'
  | 'Capital Strength'
  | 'Currency Hedge'
  | 'ESG'
  | 'Active Management'
  | 'Growth Investing'
  | 'Value Investing'
  | 'Momentum Investing'
  | 'Contrarian Investing'
  | 'Passive Management'
  | 'Index Investing'
  | 'Balanced Funds'
  | 'Target-Date Funds'
  | 'High Yield Investing'
  | 'Municipal Bond Investing'
  | 'Treasury Bond Investing'
  | 'Hedge Fund Strategies'
  | 'Private Equity'
  | 'Real Assets'
  | 'Algorithmic Trading'
  | 'Statistical Arbitrage'
  | 'Sector Rotation'
  | 'Global and International Investing'
  | 'Dividend Growth'
  | 'Sustainable Investing'
  | 'Impact Investing'
  | 'Socially Responsible Investing (SRI)'
  | 'Hedging'
  | 'Risk Parity'
  | 'Bond Laddering'
  | 'Covered Call Writing'
  | 'Other';

// export const AssetClasses = {
//   equity: [
//     'All Cap',
//     'Large Cap',
//     'Mid Cap',
//     'Small Cap',
//     'Micro Cap',
//     'Mega Cap',
//     'Growth',
//     'Value',
//     'Dividend',
//   ],
//   fixedIncome: [
//     'Government',
//     'Currency',
//     'Corporate',
//     'Municipal',
//     'High Yield',
//     'Emerging Markets',
//     'Mortgage-Backed',
//     'Asset-Backed',
//     'Convertible',
//     'Preferred',
//     'Inflation-Protected',
//     'Floating Rate',
//     'Short-Term',
//     'Intermediate-Term',
//     'Long-Term',
//   ],
//   realAssets: ['Real Estate', 'Commodities', 'Infrastructure'],
//   alternatives: [
//     'Hedge Fund',
//     'Private Equity',
//     'Venture Capital',
//     'Private Debt',
//     'Credit',
//     'Derivatives',
//     'Other',
//   ],
//   multiAsset: ['Balanced', 'Target-Date', 'Asset Allocation', 'Risk Parity'],
// };
export type AssetClass =
  | 'All Cap'
  | 'Large Cap'
  | 'Mid Cap'
  | 'Small Cap'
  | 'Micro Cap'
  | 'Mega Cap'
  | 'Growth'
  | 'Value'
  | 'Dividend'
  | 'Government'
  | 'Currency'
  | 'Corporate'
  | 'Municipal'
  | 'High Yield'
  | 'Emerging Markets'
  | 'Mortgage-Backed'
  | 'Asset-Backed'
  | 'Convertible'
  | 'Preferred'
  | 'Inflation-Protected'
  | 'Floating Rate'
  | 'Short-Term'
  | 'Intermediate-Term'
  | 'Long-Term'
  | 'Real Estate'
  | 'Commodities'
  | 'Infrastructure'
  | 'Hedge Fund'
  | 'Private Equity'
  | 'Venture Capital'
  | 'Private Debt'
  | 'Credit'
  | 'Derivatives'
  | 'Balanced'
  | 'Target-Date'
  | 'Asset Allocation'
  | 'Risk Parity'
  | 'Other';

export type Style =
  | 'Active'
  | 'Index'
  | 'Passive'
  | 'Smart Beta'
  | 'Factor'
  | 'Quant'
  | 'Thematic'
  | 'ESG'
  | 'Sustainable'
  | 'Impact'
  | 'Ethical'
  | 'Green'
  | 'Clean'
  | 'Renewable'
  | 'Carbon Neutral'
  | 'Carbon Negative'
  | 'Carbon Positive';

export type Region =
  | 'North America'
  | 'Europe'
  | 'Asia'
  | 'South America'
  | 'Africa'
  | 'Australia'
  | 'Antarctica'
  | 'Other';

export type Product = {
  fundName: string;
  primaryTicker: string;
  incomeTreatment: IncomeTreatment;
  shareClassCurrency: string;
  isin: string;
  strategy: Strategy;
  assetClass: AssetClass;
  region: Region;
  style: Style;
};
