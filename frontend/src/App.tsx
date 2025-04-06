import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LayoutCarDetails from './pages/VehicleDetails/LayoutCarDetails';
import LayoutEditVehicle from './pages/EditVehicle/LayoutEditVehicle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path="/vehicle-details/:id" element={<LayoutCarDetails />} /> 
        <Route path="/vehicle-edit/:id" element={<LayoutEditVehicle />}/>
      </Routes>
    </Router>
  );
}

export default App;
