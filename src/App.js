import logo from './logo.svg';
import './App.css';
import Login from './component/Register/Registration';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Login/>}/>

        </Routes>
    </div>
  );
}

export default App;
