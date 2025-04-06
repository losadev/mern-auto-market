import { useEffect, useState } from "react"
import InputForm from "./InputForm"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useParams } from "react-router"
import ButtonFile from "./ButtonFile"
import { RiImageAddFill } from "react-icons/ri";
import { IVehicle } from "../../types/vehicleTypes"
import { FaTrashAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6"

interface Props {
  make: string,
  model: string,
  year: number,
  price: number,
  mileage: number,
  condition: string,
  transmission: string, 
  fuelType: string, 
  description: string,
  images: string[]
}

const FormEdit = () => {
  const { register, handleSubmit, reset, setValue } = useForm<Props>()
  const [vehicleImages, setVehicleImages] = useState<IVehicle | null>()
  const { id } = useParams();
  
  useEffect(() => {
    if (!id) return;

    axios.get(`http://localhost:5000/api/vehicles/${id}`)
      .then((response) => {
        const vehicleData = response.data.data;
        reset(vehicleData); 
        setVehicleImages(vehicleData);
        setValue('condition', vehicleData.condition); 
        setValue('transmission', vehicleData.transmission); 
        setValue('fuelType', vehicleData.fuelType);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id, reset, setValue]);

  const onSubmit = (data: Props) => {
    axios.put(`http://localhost:5000/api/vehicles/${id}`, data)
      .then(() => {
        alert("Vehicle updated")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post" className="mb-4 border-1 border-gray-500 rounded-xl p-4 flex flex-col gap-4">
      <h1 className="text-white text-3xl mb-4 font-bold">Edit vehicle</h1>
      
      <InputForm {...register('make')} label="Make" name="make" type="text" register={register}/>
      <InputForm {...register('model')} label="Model" name="model" type="text" register={register}/>
      <InputForm {...register('year')} label="Year" name="year" type="number" register={register}/>
      
      <fieldset>
        <label htmlFor="condition" className="font-medium text-white">Condition</label>
        <select 
          {...register('condition')} 
          className="bg-[#031d3b] text-white border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </fieldset>
      
      <InputForm {...register('mileage')} label="Mileage" name="mileage" type="number" register={register}/>

      <fieldset className="flex flex-col">
        <label htmlFor="fueltype" className="bg-[#031d3b] font-medium text-white">Fuel type</label>
        <select 
          {...register('fuelType')} 
          className="bg-[#031d3b] text-white border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="hybrid">Hybrid</option>
          <option value="electric">Electric</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="transmission" className="font-medium text-white">Transmission</label>
        <select 
          {...register('transmission')} 
          className="bg-[#031d3b] text-white border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </fieldset>

      <fieldset className="flex flex-col text-white">
        <label htmlFor="description" className="text-white font-medium">Description</label>
        <textarea className="border-1 rounded-xl border-gray-500 overflow-y-scroll p-2" id="description" {...register('description')}></textarea>
      </fieldset>

      <fieldset>
        <label className="text-white font-medium" htmlFor="vehicle-images">Vehicle images</label>
        <div className="text-white border-3 border-dashed border-gray-600 rounded-xl items-center text-center py-8 px-2 flex flex-col gap-4">
          <span className="bg-white/20 rounded-full flex justify-center items-center w-12 h-12">
            <RiImageAddFill className="text-sky-500 font-medium text-xl"/>
          </span>
          <h1 className="text-xl font-bold">Drag and drop your images here</h1>
          <p className="my-2 mx-4 text-gray-400 font-medium">Support for JPG, PNG and GIF files. Max file size 5MB.</p>
          <ButtonFile />
          <div className="grid grid-cols-2 gap-2 mt-4 duration-200">
            {vehicleImages && vehicleImages.images?.map((img:string,index:number) => (
              <div className="relative rounded-lg group duration-200">
                <img className="rounded-lg object-cover w-full h-full" src={img} />
                <span className="absolute bottom-1 left-1 text-white z-1 text-[.8rem]">Image {index + 1}</span>
                <div className="bg-black/50 hidden  group-hover:flex place-content-center items-center w-full h-full hover:block absolute top-0 rounded-lg">
                  <span className="bg-red-600 rounded-lg p-2 inline-flex">
                    <button><FaTrashAlt className=" text-lg"/></button>
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent rounded-b-lg" />
              </div>
            ))}
          </div>
        </div>
      </fieldset>
      <div className="flex gap-2 justify-end">
        <button className="text-white p-2 mt-4 rounded-lg border-1 border-gray-500 w-25">Cancel</button>
        <button type="submit" className="bg-blue-500 text-white p-2 mt-4 rounded-lg w-25">Save</button>
      </div>
    </form>
  );
}

export default FormEdit;
