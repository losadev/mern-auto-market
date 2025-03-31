import { FaPlus } from "react-icons/fa6";

const AddVehicleButton = () => {
  return (
    <button className="inline-flex text-[.9rem] gap-4 items-center bg-gradient-to-r from-[#00b5c9] 0% to-[#65f5ff] 100% justify-center text-sky-950 font-medium rounded-lg py-2 px-3 my-4">
      <FaPlus/><span>Add vehicle</span>
    </button>
  )
}

export default AddVehicleButton