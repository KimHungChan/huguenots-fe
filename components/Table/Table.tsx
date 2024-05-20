'use client';
import React, { useState } from 'react';
import {
  AssetClass,
  Product,
  Region,
  Strategy,
  Style,
  Strategies,
} from '../../types/types';
import Image from 'next/image';
type Props = {
  tableData: Array<Product>;
};

const tableHeaders = {
  fundName: 'Fund Name',
  primaryTicker: 'Primary Ticker',
  incomeTreatment: 'Income Treatment',
  shareClassCurrency: 'Share className Currency',
  isin: 'ISIN',
  strategy: 'Strategy',
  assetClass: 'Asset className',
  region: 'Region',
};

const styles: Array<string> = [
  'Active',
  'Index',
  'Passive',
  'Smart Beta',
  'Factor',
  'Quant',
  'Thematic',
  'ESG',
  'Sustainable',
  'Impact',
  'Ethical',
  'Green',
  'Clean',
  'Renewable',
  'Carbon Neutral',
  'Carbon Negative',
  'Carbon Positive',
];

const Table: React.FC<Props> = ({ tableData }) => {
  const [search, setSearch] = useState<string>('');
  //   const [strategy, setStrategy] = useState('');
  // set initial state of strategy to be an object with all strategies set to false
  const [strategyState, setStrategyState] = useState<Record<Strategy, boolean>>(
    Strategies.reduce(
      (accumulator, current) => ({ ...accumulator, [current]: false }),
      {} as Record<Strategy, boolean>
    )
  );
  const [strategyFilters, setStrategyFilters] = useState<Array<Strategy>>([]);
  console.log(strategyState);

  const [strategyDropdown, toggleStrategyDropdown] = useState(false);
  //   const [assetClass, setAssetClass] = useState<Array<AssetClass>>([]);
  //   const [region, setRegion] = useState<Array<Region>>();
  //   const [style, setStyle] = useState<Array<Style>>([]);

  console.log(strategyDropdown);
  console.log(strategyFilters);

  const searchBar = () => (
    <div className="flex items-center gap-4 mb-4 border-b-2 border-blue-900">
      <Image
        src="/magnifying-glass-solid.svg"
        alt="Search icon"
        className="w-5 h-5"
        width={20}
        height={20}
      />
      <h2 className="m-a">SEARCH</h2>
      <input
        type="text"
        placeholder="Enter fund name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 "
      />
    </div>
  );

  const filterWidgets = () => (
    <div className="flex gap-4 mb-4">
      <div className="flex flex-col gap-2">
        <fieldset>
          <button
            className="py-2.5 px-4 border border-gray-300 w-44 g"
            onClick={() => toggleStrategyDropdown((prevState) => !prevState)}
          >
            <div className="flex justify-between items-center">
              <span className="h-4 text-sm flex items-center">Strategy</span>
              <Image
                src="/arrow-down-sign.png"
                alt="Arrow down sign"
                className={`${strategyDropdown && 'rotate-180'}` + ' w-3 h-2.5'}
                width={3}
                height={2.5}
              />
            </div>
          </button>
          <div
            className={`${
              !strategyDropdown && 'invisible'
            } absolute bg-white w-44 max-h-56 overflow-y-auto border border-gray-300 rounded z-10 scrollbar shadow-lg`}
          >
            {Object.keys(strategyState).map((strategy, index) => (
              <fieldset key={strategy} className="m-2">
                <input
                  type="checkbox"
                  id={strategy}
                  name={strategy}
                  value={strategy}
                  onChange={(e) => {
                    setStrategyState((prevState) => ({
                      ...prevState,
                      [strategy]: e.target.checked,
                    }));
                    setStrategyFilters((prevState) => {
                      if (e.target.checked) {
                        return [...prevState, strategy as Strategy];
                      } else {
                        return prevState.filter((item) => item !== strategy);
                      }
                    });
                  }}
                  className="mr-2"
                />
                <label htmlFor={strategy}>{strategy}</label>
              </fieldset>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      {searchBar()}
      {filterWidgets()}

      <table className="border border-gray-300">
        <thead>
          <tr>
            {Object.values(tableHeaders).map((header, index) => (
              <th className="border border-gray-300 p-2" key={index}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData
            .filter((product) =>
              product.fundName.toLowerCase().includes(search.toLowerCase())
            )
            .filter(
              (product) =>
                strategyFilters.length === 0 ||
                strategyFilters.includes(product.strategy)
            )
            .map((product) => (
              <tr key={product.isin}>
                <td className="border border-gray-300 p-2">
                  {product.fundName}
                </td>
                <td className="border border-gray-300 p-2">
                  {product.primaryTicker}
                </td>
                <td className="border border-gray-300 p-2">
                  {product.incomeTreatment}
                </td>
                <td className="border border-gray-300 p-2">
                  {product.shareClassCurrency}
                </td>
                <td className="border border-gray-300 p-2">{product.isin}</td>
                <td className="border border-gray-300 p-2">
                  {product.strategy}
                </td>
                <td className="border border-gray-300 p-2">
                  {product.assetClass}
                </td>
                <td className="border border-gray-300 p-2">{product.region}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
