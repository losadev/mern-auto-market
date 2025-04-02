interface Props {
  onClick: () => void;
}

const Button = ({onClick}:Props) => {
  return (
    <button className="bg-sky-600 text-sky-950 rounded-lg text-center px-3 py-2 font-bold cursor-pointer" onClick={onClick}>View details</button>
  )
}

export default Button