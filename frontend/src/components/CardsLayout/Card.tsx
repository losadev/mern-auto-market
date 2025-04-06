import { FaCarSide } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { TbGasStation } from "react-icons/tb";
import Button from "./Button";
import { SlOptionsVertical } from "react-icons/sl";
import { useNavigate } from "react-router";
import { ReactNode } from "react";


type Props = {
  id?: string
  tag: ReactNode,
  title: string,
  year: number,
  price: number,
  miles: number,
  gasoline: string,
  image: string
}

const Card = ({tag,gasoline,miles,price,title,year, image, id}: Props) => {
  const navigate = useNavigate()

   const handleClick = () => {
    navigate(`/vehicle-details/${id}`);
  }


  return (
    <div className="flex flex-col bg-[#02172e] ">
      <div className="relative shrink">
        <img className="rounded-t-lg w-full h-full object-contain" src={image} alt="Car image" />
        <span className="absolute top-1 right-2">{tag}</span>
      </div>
      <div className="border-1 border-gray-700 rounded-b-lg py-2 px-4 grow">
        <h1 className="text-white font-bold text-lg mb-4">{title}</h1>
        <p className="text-2xl font-bold text-sky-700">$ {price}</p>
        <div className="grid grid-cols-2 gap-1  text-white text-[.9rem] mt-4">
          <span className="flex gap-1 items-center"><FaCarSide className="mr-1 text-green-600 text-lg"/> {miles} miles</span>
          <span className="flex gap-1 items-center"><TbGasStation className="mr-1 text-lg text-orange-500"/> {gasoline}</span>
          <span className="flex gap-1 items-center"><MdOutlineDateRange className="mr-1 text-purple-700 text-lg"/> {year}</span>
      </div>

      <div className="flex justify-between mt-4 items-center mb-2">
        <Button onClick={handleClick}/>  
        <SlOptionsVertical className=" text-white cursor-pointer"/>
      </div>  
      </div>
    </div>
  )
}

export default Card