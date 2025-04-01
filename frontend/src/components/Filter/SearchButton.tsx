import { FaSearch } from "react-icons/fa";


const SearchButton = () => {
  return (
    <button type="submit" className="bg-sky-600 rounded-lg flex justify-center items-center gap-4 py-2 group cursor-pointer">
      <FaSearch className="text-gray-900 group-hover:text-white duration-200" />
      <span className="font-medium text-gray-900 group-hover:text-white duration-200">Search</span>
    </button>
  )
}

export default SearchButton