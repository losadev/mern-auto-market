import { TbFilterSearch } from "react-icons/tb";


const ResetFilters = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-white group">
      <span className="text-gray-400 group-hover:text-white duration-200 text-[.8rem]">Reset:</span>
      <TbFilterSearch className="text-gray-400 text-xl font-bold cursor-pointer group-hover:text-white duration-200"/>
    </div>
  )
}

export default ResetFilters