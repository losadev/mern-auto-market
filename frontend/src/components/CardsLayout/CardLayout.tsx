import { useEffect, useState } from "react"
import { IVehicle } from "../../types/vehicleTypes"
import Card from "./Card"
import axios from "axios"
import NewTag from "./Tags/NewTag"
import UsedTag from "./Tags/UsedTag"

const CardLayout = () => {
  const [vehicles, setVehicles] = useState<IVehicle[] | null>();

useEffect(() => {
  axios.get("http://localhost:5000/api/vehicles")
  .then((response) => {
    const normalizedVehicles = response.data.data.map((car: any) => ({
      ...car,
      id: car._id,  // Renombrar `_id` a `id`
    }));
    setVehicles(normalizedVehicles);
  })
  .catch((err) => {
    console.error(err);
  })
}, []);


  return (
    <div className="px-4 grid grid-cols-1 gap-4 py-8">
      {vehicles && vehicles.map((car,index) => (
        <Card gasoline={car.fuelType} image={car.images?.[0] || "https://placehold.co/600x400/000000/FFFFFF/png"}   miles={car.mileage} price={car.price} tag={car.condition === 'NUEVO' ? <NewTag />:<UsedTag />} title={car.make} year={car.year} key={index} id={car.id}/>
      ))}
    </div>
  )
}

export default CardLayout