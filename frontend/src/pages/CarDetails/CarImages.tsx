import { useState } from "react";

const CarImages = (images:string[]) => {
  const [selectedImage, setSelectedImage] = useState<number>(0)

  const img2 = images;
  const img = [
    "https://wallpapercave.com/wp/wp2569872.jpg",
    "https://get.wallhere.com/photo/car-vehicle-Lamborghini-Lamborghini-Gallardo-sports-car-performance-car-wheel-supercar-land-vehicle-automotive-design-automobile-make-luxury-vehicle-city-car-138683.jpg",
    "https://c.wallhere.com/photos/f6/ab/car_Chevrolet_Corvette-174939.jpg!d",
    "http://www.autopista.es/media/cache/original/upload/images/imagegallery/imagegallery-45597-564c91cee3d2a.jpg"
  ];

  const handleClick = (index:number) => {
    setSelectedImage(index);
  }

  return (
    <div>
      <img src={img[selectedImage]} alt="" className="rounded-xl h-50 w-full" />
      <div className="flex overflow-x-scroll h-20 mt-4 gap-2">
        {img && img.map((img, index) => (
          <img src={img} alt="coche" className="rounded-xl focus:outline-none focus:ring-2 focus: ring-sky-400" onClick={() => handleClick(index)} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default CarImages