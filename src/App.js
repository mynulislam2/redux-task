import logo from './logo.svg';
import './App.css';
import Registration from './component/Register/Registration';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashBoard from './component/DashBoard/DashBoard';
//import { AnimatePresence } from 'framer-motion';
import Details from './component/Details/Details';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Registration />} />

          <Route exact path="/DashBoard" element={<DashBoard />} />
          <Route exact path="/DashBoard/Details" element={<Details/>} />

        </Routes>

    </div>
  );
}

export default App;
