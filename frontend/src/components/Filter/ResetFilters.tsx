import { TbFilterSearch } from "react-icons/tb";


const ResetFilters = () => {
  return (
    <div className="flex gap-2 cursor-pointer hover:text-white group">
      <span className="text-gray-400 group-hover:text-white duration-200">Reset:</span>
      <TbFilterSearch className="text-gray-400 text-xl font-bold cursor-pointer group-hover:text-white duration-200"/>
    </div>
  )
}

export default ResetFilters