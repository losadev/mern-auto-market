import { FaSearch } from "react-icons/fa";


const SearchInput = () => {
  return (
    <div className="border-1 text-gray-400 border-gray-600 rounded-lg flex gap-4 px-3 py-2 place-items-center">
      <FaSearch />
      <input className="grow placeholder:text-gray-400 placeholder:font-medium outline-0 font-medium text-gray-400" type="text" placeholder="Search by make, model, or year..."/>
    </div>
  )
}

export default SearchInput