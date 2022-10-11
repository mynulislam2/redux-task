import logo from './logo.svg';
import './App.css';
import Login from './component/Register/Registration';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashBoard from './component/DashBoard/DashBoard';
import { AnimatePresence } from 'framer-motion';
import Details from './component/Details/Details';

function App() {
  const location=useLocation()
  return (
    <div className="App">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Login />} />

          <Route exact path="/DashBoard" element={<DashBoard />} />
          <Route exact path="/DashBoard/Details" element={<Details/>} />

        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
