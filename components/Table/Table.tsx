'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import multiSelectDropdownFilter from '../MultiSelectDropdownFilter/MultiSelectDropdownFilter';
import {
  AssetClass,
  Product,
  Region,
  Strategy,
  Style,
} from '../../types/types';
import {
  AssetClasses,
  Regions,
  Strategies,
  Styles,
} from '../../constants/constants';

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
  style: 'Style',
};

const Table: React.FC<Props> = ({ tableData }) => {
  const [search, setSearch] = useState<string>('');

  // set initial state of strategy to be an object with all strategy values set to false
  const [strategy, setStrategy] = useState<Record<Strategy, boolean>>(
    Strategies.reduce(
      (accumulator, current) => ({ ...accumulator, [current]: false }),
      {} as Record<Strategy, boolean>
    )
  );
  const [strategyFilters, setStrategyFilters] = useState<Array<Strategy>>([]);
  const [strategyDropdown, toggleStrategyDropdown] = useState(false);

  const [assetClass, setAssetClass] = useState<Record<AssetClass, boolean>>(
    AssetClasses.reduce(
      (accumulator, current) => ({ ...accumulator, [current]: false }),
      {} as Record<AssetClass, boolean>
    )
  );
  const [assetClassFilters, setAssetClassFilters] = useState<Array<AssetClass>>(
    []
  );
  const [assetClassDropdown, toggleAssetClassDropdown] = useState(false);
  const [style, setStyle] = useState<Record<Style, boolean>>(
    Styles.reduce(
      (accumulator, current) => ({ ...accumulator, [current]: false }),
      {} as Record<Style, boolean>
    )
  );
  const [styleFilters, setStyleFilters] = useState<Array<Style>>([]);
  const [styleDropdown, toggleStyleDropdown] = useState(false);

  const [region, setRegion] = useState<Record<Region, boolean>>(
    Regions.reduce(
      (accumulator, current) => ({ ...accumulator, [current]: false }),
      {} as Record<Region, boolean>
    )
  );
  const [regionFilters, setRegionFilters] = useState<Array<Region>>([]);
  const [regionDropdown, toggleRegionDropdown] = useState(false);

  // TODO: Extract into reusable Search component
  const searchBar = () => (
    <div className="flex items-center gap-4 mb-4 border-b-2 border-blue-900">
      <Image
        src="/magnifying-glass-solid.svg"
        alt="Search icon"
        className="w-5 h-5"
        width={20}
        height={20}
      />
      <h2 className="m-a text-xl text-huguenots-blue-search">SEARCH</h2>
      <input
        type="text"
        placeholder="Enter fund name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 bg-transparent focus:outline-none"
      />
    </div>
  );

  const filterWidgets = () => (
    <div className="flex gap-8">
      {multiSelectDropdownFilter(
        'Strategy',
        strategy,
        setStrategy,
        setStrategyFilters,
        strategyDropdown,
        toggleStrategyDropdown
      )}
      {multiSelectDropdownFilter(
        'Asset Class',
        assetClass,
        setAssetClass,
        setAssetClassFilters,
        assetClassDropdown,
        toggleAssetClassDropdown
      )}
      {multiSelectDropdownFilter(
        'Region',
        region,
        setRegion,
        setRegionFilters,
        regionDropdown,
        toggleRegionDropdown
      )}
      {multiSelectDropdownFilter(
        'Style',
        style,
        setStyle,
        setStyleFilters,
        styleDropdown,
        toggleStyleDropdown
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center text-black">
      <div className="bg-gray-100 px-24 w-full justify-center flex">
        <div className="max-w-7xl w-full flex flex-col ">
          <h1 className="text-2xl my-9 text-huguenots-blue-text">
            Product Finder
          </h1>
          {searchBar()}
          {filterWidgets()}
        </div>
      </div>
      <table className="border-none border-gray-300 mx-24 mt-5 mb-10 max-w-7xl w-full">
        <thead className="bg-huguenots-blue text-white text-xs h-12">
          <tr>
            {Object.values(tableHeaders).map((header, index) => (
              <th
                className={`${
                  index <= 3 && 'text-left bg-huguenots-light-blue '
                } p-2 !font-medium`}
                key={index}
              >
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
            .filter(
              (product) =>
                assetClassFilters.length === 0 ||
                assetClassFilters.includes(product.assetClass)
            )
            .filter(
              (product) =>
                styleFilters.length === 0 ||
                styleFilters.includes(product.style)
            )
            .filter(
              (product) =>
                regionFilters.length === 0 ||
                regionFilters.includes(product.region)
            )
            .map((product) => (
              /* TODO: Refactor to be more DRY */
              <tr key={product.isin} className="text-center">
                <td className="border-b border-gray-300 p-2 text-huguenots-blue-text text-left">
                  {product.fundName}
                </td>
                <td className="border-b border-gray-300 p-2">
                  {product.primaryTicker}
                </td>
                <td className="border-b border-gray-300 p-2">
                  {product.incomeTreatment}
                </td>
                <td className="border-b border-r border-gray-300 p-2">
                  {product.shareClassCurrency}
                </td>
                <td className="border-b border-gray-300 p-2">{product.isin}</td>
                <td className="border-b border-gray-300 p-2">
                  {product.strategy}
                </td>
                <td className="border-b border-gray-300 p-2">
                  {product.assetClass}
                </td>
                <td className="border-b border-gray-300 p-2">
                  {product.region}
                </td>
                <td className="border-b border-gray-300 p-2">
                  {product.style}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
