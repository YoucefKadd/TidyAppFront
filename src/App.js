import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/* La partie Menu / Navigation */}
      <Nav />


      {/* La partie connexion */}


      <main className="form-signin w-100 m-auto">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </main>


    </div>

  );
}

export default App;
