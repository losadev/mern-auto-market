import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import LayoutCarDetails from './components/CarDetails/LayoutCarDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path="/car-details/:id" element={<LayoutCarDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
