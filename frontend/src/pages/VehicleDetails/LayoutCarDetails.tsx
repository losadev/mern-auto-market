import { useParams } from "react-router";
import CarImages from "./CarImages"
import GoBackLink from "./GoBackLink"
import CardDetails from "./CardDetails";
import axios from "axios";
import { useEffect, useState } from "react";
import { IVehicle } from "../../types/vehicleTypes";


const LayoutCarDetails = () => {
  const [vehicle, setVehicle] = useState<IVehicle | null>(null)
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:5000/api/vehicles/${id}`)
    .then((response) => {
      setVehicle(response.data.data);
    })
    .catch((err) => {
      console.error(err);
    });

  }, [id]); 

 return (
  <div className="bg-[#031d3b] px-4">
    <GoBackLink />
    {vehicle && (
      <>
        <CarImages images={vehicle?.images || []} />
        <CardDetails
          condition={vehicle.condition}
          fuelType={vehicle.fuelType}
          make={vehicle.make}
          mileage={vehicle.mileage}
          id={String(id)}
          description={vehicle.description || "No description"}
          price={vehicle.price}
          year={vehicle.year}
          model={vehicle.model}
          transmission={vehicle.transmission}
          location={vehicle.location || "Location not available"}
        />
      </>
    )}
  </div>
);

}

export default LayoutCarDetails