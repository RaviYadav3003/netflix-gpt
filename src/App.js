import './App.css';
import Login from './Components/Login';
import Browser from './Components/Browser';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/browser" element={<Browser />} />
      </Routes>
    </div>
  );
}

export default App;
