import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';
import Categorie from './pages/Categorie';
import Flux from './pages/Flux';
import Fournisseur from './pages/Fournisseur';
import Produit from './pages/Produit';
import Stock from './pages/Stock';

// import Nav from './components/Nav';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {

  const [auth, setAuth] = useState(true);
  return (
    <div className="App">
      {/* La partie Menu / Navigation */}
      <Header />

      <div className="container-fluid">
        <div className="row">
          {/* <Nav /> */}
          {auth ?
            <>
              <SideBar />

              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/categorie' element={<Categorie />} />
                  <Route path='/flux' element={<Flux />} />
                  <Route path='/fournisseur' element={<Fournisseur />} />
                  <Route path='/produit' element={<Produit />} />
                  <Route path='/stock' element={<Stock />} />
                </Routes>
              </main>
            </>
            :
            <main className="form-signin w-100 m-auto">
              <Login />
            </main>}
        </div>
      </div>



      {/* La partie connexion */}

      {/* <main className="form-signin w-100 m-auto"> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Routes>
      {/* </main> */}


    </div>

  );
}

export default App;
