import { BiShare } from "react-icons/bi"

const ButtonShare = () => {
  return (
    <button className="flex-1/2 text-lg font-medium cursor-pointer border-1 border-gray-500 text-white flex gap-2 justify-center items-center px-3 py-2 rounded-xl">
      <BiShare />
      <span>Share</span>
    </button>
  )
}

export default ButtonShare