import Image from 'next/image';

const multiSelectDropdownFilter = <T extends string | number | symbol>(
  filterName: string,
  filterState: Record<T, boolean>,
  setFilterState: React.Dispatch<React.SetStateAction<Record<T, boolean>>>,
  setFilter: React.Dispatch<React.SetStateAction<Array<T>>>,
  filterDropdown: boolean,
  toggleFilterDropdown: React.Dispatch<React.SetStateAction<boolean>>
) => (
  <div className="flex gap-4 mb-9 mt-6 bg-white">
    <div className="flex flex-col gap-2">
      <fieldset>
        <button
          className="py-2.5 px-4 border border-gray-300 w-44 g"
          onClick={() => toggleFilterDropdown((prevState) => !prevState)}
        >
          <div className="flex justify-between items-center">
            <span className="h-4 text-sm flex items-center font-myriad">
              {filterName}
            </span>
            <Image
              src="/arrow-down-sign.png"
              alt="Arrow down sign"
              className={`${filterDropdown && 'rotate-180'}` + ' w-3 h-2.5'}
              width={3}
              height={2.5}
            />
          </div>
        </button>
        <div
          className={`${
            !filterDropdown && 'invisible'
          } absolute bg-white w-44 max-h-56 overflow-y-auto border border-gray-300 rounded z-10 scrollbar shadow-lg`}
        >
          {Object.keys(filterState).map((filterState, index) => (
            <fieldset key={filterState} className="m-2">
              <input
                type="checkbox"
                id={filterState}
                name={filterState}
                value={filterState}
                onChange={(e) => {
                  setFilterState((prevState) => ({
                    ...prevState,
                    [filterState]: e.target.checked,
                  }));
                  setFilter((prevState) => {
                    if (e.target.checked) {
                      return [...prevState, filterState as T];
                    } else {
                      return prevState.filter((item) => item !== filterState);
                    }
                  });
                }}
                className="mr-2"
              />
              <label htmlFor={filterState}>{filterState}</label>
            </fieldset>
          ))}
        </div>
      </fieldset>
    </div>
  </div>
);

export default multiSelectDropdownFilter;
