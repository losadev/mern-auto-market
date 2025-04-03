import { CiEdit } from "react-icons/ci";
import ButtonShare from "./Buttons/ButtonShare";
import ButtonContact from "./Buttons/ButtonContact";
import CarInfo from "./CarInfo";

interface CardDetailsProps {
  id?: string | number
  condition: string;
  fuelType: string;
  make: string;
  model: string;
  price?:number
  transmission: string;
  year: number;
  description: string;
  location: string;
  mileage: number;
}

const CardDetails = ({ condition, fuelType, make, model, transmission, year, description, location, mileage }: CardDetailsProps) => {
  return (
    <div>
      <div className="flex justify-evenly py-5 bg-gradient-to-r from-[#00b5c9] 0% to-[#65f5ff] 100% rounded-t-xl mt-8">
        <h1 className="font-medium text-3xl text-white">{make} {model}</h1>
        <button className="text-lg font-medium cursor-pointer bg-sky-300 flex gap-2 justify-center items-center px-3 py-2 rounded-xl">
          <CiEdit />
          <span>Edit</span>
        </button>
      </div>
      <div className="px-8 py-6">
        <h1 className="text-sky-600 text-3xl font-semibold">$25000</h1>
        <div className="grid grid-cols-2 mt-4 text-white/50 gap-4">
          <span>
            <p>Condition</p>
            <p className="text-white text-lg font-medium">{condition}</p>
          </span>
          <span>
            <p>Year</p>
            <p className="text-white text-lg font-medium">{year}</p>
          </span>
          <span>
            <p>Mileage</p>
            <p className="text-white text-lg font-medium">{mileage} miles</p>
          </span>
          <span>
            <p>Engine</p>
            <p className="text-white text-lg font-medium">{fuelType}</p>
          </span>
        </div>
        <div className="flex justify-between gap-2 mt-4">
          <ButtonContact />
          <ButtonShare />
        </div>
      </div>
      <div>
        <CarInfo description={description} transmission={transmission} location={location} />
      </div>
    </div>
  );
};

export default CardDetails;