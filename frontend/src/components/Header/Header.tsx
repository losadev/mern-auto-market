import AddVehicleButton from "./AddVehicleButton"

const Header = () => {
  return (
    <header className="py-5 px-4">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Vehicle Management</h1>
        <p className="text-gray-400">Find, manage, and track your vehicles</p>
      </div>
      <AddVehicleButton />
    </header>
  )
}

export default Header