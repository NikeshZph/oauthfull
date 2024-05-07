import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './Component/Register';
import WelcomePage from './Component/Welcome';
import Login from './Component/Login';
import Form from './Component/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} /> 
        <Route path="/Home" element={<WelcomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
