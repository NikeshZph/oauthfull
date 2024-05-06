import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Component/Register';
import WelcomePage from './Component/Welcome';
import Login from './Component/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} /> 
        <Route path="/Home" element={<WelcomePage />}/>
        <Route path="/login" element={<Login />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
