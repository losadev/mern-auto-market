import { UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  type: string;
  name: string;
  register: UseFormRegister<any>; 
};

const InputForm = ({ label, type, name, register }: Props) => {
  return (
    <fieldset className="flex flex-col gap-1 text-white">
      <label htmlFor={name} className="font-medium">{label}</label>
      <input 
        id={name}
        {...register(name)} 
        type={type} 
        name={name} 
        className="border border-gray-500 rounded-lg px-2 py-2 w-full focus:outline-none focus:ring-2 focus:ring-sky-400" 
      />
    </fieldset>
  )
};

export default InputForm;
