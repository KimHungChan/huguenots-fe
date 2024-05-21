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

// export const AssetClassesInitial = {
//   'All Cap': false,
//   'Large Cap': false,
//   'Mid Cap': false,
//   'Small Cap': false,
//   'Micro Cap': false,
//   'Mega Cap': false,
//   Growth: false,
//   Value: false,
//   Dividend: false,
//   Government: false,
//   Currency: false,
//   Corporate: false,
//   Municipal: false,
//   'High Yield': false,
//   'Emerging Markets': false,
//   'Mortgage-Backed': false,
//   'Asset-Backed': false,
//   Convertible: false,
//   Preferred: false,
//   'Inflation-Protected': false,
//   'Floating Rate': false,
//   'Short-Term': false,
//   'Intermediate-Term': false,
//   'Long-Term': false,
//   'Real Estate': false,
//   Commodities: false,
//   Infrastructure: false,
//   'Hedge Fund': false,
//   'Private Equity': false,
//   'Venture Capital': false,
//   'Private Debt': false,
//   Credit: false,
//   Derivatives: false,
//   Balanced: false,
//   'Target-Date': false,
//   'Asset Allocation': false,
//   'Risk Parity': false,
//   Other: false,
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
