type IncomeTreatment = 'Acc' | 'Dist' | 'Inc' | 'Other';
type Strategy =
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

type AssetClass =
  | 'Equity'
  | 'Fixed Income'
  | 'Property'
  | 'Cash'
  | 'Commodities'
  | 'Multi Asset'
  | 'Derivatives'
  | 'Hedge Fund'
  | 'Private Equity'
  | 'Infrastructure'
  | 'Foreign currencies'
  | 'Cryptocurrency'
  | 'Money Market'
  | 'Real Estate'
  | 'Venture Capital'
  | 'Private Debt'
  | 'Credit'
  | 'Convertible'
  | 'Other';

type Style =
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

type Region =
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
