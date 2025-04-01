import SearchButton from "./SearchButton"
import SearchInput from "./SearchInput"

interface Props {
  hidden: boolean
}

const SearchInputFilter = ({hidden}:Props) => {
  return (
    <div className={`flex flex-col gap-2 ${hidden ? "hidden":"block"}`}>
      <SearchInput />
      <SearchButton />
    </div>
  )
}

export default SearchInputFilter