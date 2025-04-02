import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const GoBackLink = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white flex py-6 px-6">
      <button onClick={() => navigate(-1)} className="flex gap-4 px-2 py-1 rounded-lg hover:underline cursor-pointer">
        <FaArrowLeft />
        <span>Back to vehicles</span>
      </button>
    </div>
  )
}

export default GoBackLink