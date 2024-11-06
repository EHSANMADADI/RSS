import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FerstPageComponent from './Page/FerstPageComponent.tsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FerstPageComponent/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
