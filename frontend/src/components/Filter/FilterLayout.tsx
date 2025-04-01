import { useState } from "react"
import AdvancedFilters from "./AdvancedFilters"
import ResetFilters from "./ResetFilters"
import SearchInputFilter from "./SearchInputFilter"
import SearchTypesButtons from "./SearchTypesButtons"

const FilterLayout = () => {
  const [filterSearch, setFilterSearch] = useState<boolean>(true);
  const [advancedFilter, setAdvancedFilter] = useState<boolean>(false);

  const handleClickSearchFilter = () => {
    setFilterSearch(false);
    setAdvancedFilter(true);
  }

  const handleClickAdvancedFilter = () => {
    setFilterSearch(true);
    setAdvancedFilter(false);
  }

  return (
    <div className="flex flex-col px-2 gap-4 py-4">
      <div className="flex justify-between items-center">
        <SearchTypesButtons hiddenAdvanced={advancedFilter} hiddenSearch={filterSearch} handleClickAdvancedFilter={handleClickAdvancedFilter} handleClickSearchFilter={handleClickSearchFilter}/>
        <ResetFilters/>
      </div>
      <AdvancedFilters hidden={advancedFilter}/>      
      <SearchInputFilter hidden={filterSearch}/>
    </div>
  )
}

export default FilterLayout