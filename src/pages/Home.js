import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Dashboard from './Dashboard';
import Categorie from './Categorie';
import Flux from './Flux';
import Fournisseur from './Fournisseur';
import Produit from './Produit';
import Stock from './Stock';


import { useDispatch, useSelector } from 'react-redux';
import { setUserOnStore } from '../feature/user.slice';


import SideBar from './../components/SideBar';
import { useEffect } from 'react';



const Home = (props) => {
    const userData = useSelector((state) => state.userStore.user);


    useEffect(() => {
        document.title = 'Home';
    })

    // const [userConnected, setUserConnected] = useState(props.user);
    // console.log(props.user)
    return (
        <>
            < SideBar />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3">
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/categorie' element={<Categorie />} />
                    <Route path='/flux' element={<Flux />} />
                    <Route path='/fournisseur' element={<Fournisseur />} />
                    <Route path='/produit' element={<Produit />} />
                    <Route path='/stock' element={<Stock />} />
                </Routes>
            </main>
        </>
    );
};

export default Home;