interface Props {
  handleClickSearchFilter: () => void;
  handleClickAdvancedFilter: () => void;
  hiddenSearch: boolean;
  hiddenAdvanced: boolean;
}

const SearchTypesButtons = ({handleClickSearchFilter, handleClickAdvancedFilter,hiddenAdvanced,hiddenSearch}:Props) => {
  return (
    <div className="bg-white/50 rounded-lg p-1 flex gap-2 font-medium">
      <button className={`rounded-lg py-1 px-2 cursor-pointer ${hiddenSearch ? "text-sky-950":"bg-sky-950 text-white"}`} onClick={handleClickSearchFilter}>Quick search</button>
      <button className={`rounded-lg py-1 px-2 cursor-pointer ${hiddenAdvanced ? "text-sky-950":"bg-sky-950 text-white"}`} onClick={handleClickAdvancedFilter}>Advanced filters</button>
    </div>
  )
}

export default SearchTypesButtons