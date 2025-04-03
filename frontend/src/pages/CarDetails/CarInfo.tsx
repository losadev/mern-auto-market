import { FaCarSide } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

interface Props {
  description: string,
  transmission: string,
  location: string
}

const CarInfo = ({description, transmission,location}:Props) => {
  return (
    <div className="mt-16">
      <h1 className="text-white text-3xl font-semibold px-8">Description</h1>
      <br />
      <hr className="text-gray-400"/>
      <br />
      <p className="text-white text-pretty px-8 text-xl font-normal">
        {description}
      </p>
      <h1 className="text-white text-3xl font-semibold px-8 mt-16">Specifications</h1>
      <br />
      <hr className="text-gray-400"/>
      <br />
      <div className="flex flex-col gap-6 px-6 pb-6">
        <div className="flex gap-8 items-center">
          <span><FaCarSide className="text-4xl text-green-600"/></span>
          <div>
            <p className="text-white/50">Transmission</p>
            <p className="text-xl font-medium text-white">{transmission}</p>
          </div>
        </div>

        <div className="flex gap-8">
          <span><IoLocationOutline className="text-4xl text-red-600"/></span>
          <div>
            <p className="text-white/50">Location</p>
            <p className="text-xl font-medium text-white">{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarInfo