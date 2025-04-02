import { useParams } from "react-router";
import CarImages from "./CarImages"
import GoBackLink from "./GoBackLink"
import CardDetails from "./CardDetails";


const LayoutCarDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-[#031d3b] px-4">
      <GoBackLink />
      <CarImages />
      <CardDetails />
    </div>
  )
}

export default LayoutCarDetails