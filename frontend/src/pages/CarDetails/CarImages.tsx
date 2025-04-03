import { useState } from "react";
import { CustomPlaceholder } from 'react-placeholder-image';

interface Props {
  images: string[]
}

const CarImages = ({images}:Props) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const img = images;

  const handleClick = (index:number) => {
    setSelectedImage(index);
  }

  return (
    <div>
      <img src={img[selectedImage]} className="rounded-xl h-50 w-full" />
      <div className="flex overflow-x-scroll h-20 mt-4 gap-2">
        {img && img.map((img, index) => (
          <img src={img} className="rounded-xl focus:outline-none focus:ring-2 focus: ring-sky-400" onClick={() => handleClick(index)} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default CarImages