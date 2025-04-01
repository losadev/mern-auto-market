import FilterLayout from "./Filter/FilterLayout"

const Main = () => {
  return (
    <main>
      <FilterLayout />
      <div className="flex justify-between items-center px-4 py-2 mt-8 gap-2">
        <h1 className="text-lg font-bold text-white">Available Vehicles</h1>
        <div className="flex-1/3">
          <span className="text-gray-400 hidden">Sort by:</span>
          <select className="border-1 border-gray-500 rounded-lg px-1 py-1 text-white font-bold flex-1" name="vehicleFilter" id="vehicleFilter">
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>
      <section>

      </section>
    </main>
  )
}

export default Main