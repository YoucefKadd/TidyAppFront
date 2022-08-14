import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from './Dashboard';
import Categorie from './Categorie';
import Flux from './Flux';
import Fournisseur from './Fournisseur';
import Produit from './Produit';
import Stock from './Stock';


import SideBar from './../components/SideBar';


const Home = () => {
    return (
        <div className="container-fluid">
        <div className="row">
          {/* <Nav /> */}
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
        </div>
      </div>
    );
};

export default Home;