import SearchButton from "./SearchButton"
import { useForm } from "react-hook-form"

interface Props {
  hidden:boolean
}

const AdvancedFilters = ({hidden}:Props) => {
  const { register, handleSubmit } = useForm()

  return (
    <form 
      action="#" 
      method="get" 
      onSubmit={handleSubmit((data) => console.log(data))}
      className={`w-full max-w-lg ${hidden ? "hidden":"block"}`}
    >
      <div className="flex flex-col text-white font-medium gap-3">
        
        <fieldset className="flex flex-col gap-1">
          <label htmlFor="make">Any Make</label>
          <select {...register("make")} id="make" className="border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus: ring-sky-400">
            <option value="" className="w-full">Make</option>
          </select>
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="model">Model</label>
          <input 
            type="text" 
            {...register("model", { required: false })} 
            placeholder="Any model" 
            className="border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus: ring-sky-400" 
          />
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="year">Year</label>
          <div className="flex gap-2">
            <select {...register("minYear")} id="min-year" className="border border-gray-500 rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:ring-2 focus: ring-sky-400">
              <option value="">Min</option>
            </select>
            <select {...register("maxYear")} id="max-year" className="border border-gray-500 rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:ring-2 focus: ring-sky-400">
              <option value="">Max</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="price-range">Price range</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              {...register("priceRangeMin", { required: false })} 
              placeholder="Min $" 
              className="border border-gray-500 rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:ring-2 focus: ring-sky-400" 
            />
            <input 
              type="text" 
              {...register("priceRangeMax", { required: false })} 
              placeholder="Max $" 
              className="border border-gray-500 rounded-lg px-2 py-2 w-1/2 focus:outline-none focus:ring-2 focus: ring-sky-400" 
            />
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="condition">Condition</label>
          <select {...register("condition")} id="condition" className="border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus: ring-sky-400">
              <option value="default" defaultChecked>Any condition</option>
              <option value="new">New</option>
              <option value="used">Used</option>
          </select>
        </fieldset>

        <fieldset className="flex flex-col gap-1">
          <label htmlFor="engine">Engine Type</label>
          <select {...register("engineType")} id="engine" className="border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus: ring-sky-400">
            <option value="default" defaultChecked>Any engine</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
          </select>
        </fieldset>

        <SearchButton />
      </div>
    </form>
  )
}

export default AdvancedFilters
