import React from 'react';
import { Link } from "react-router-dom";
import CategorieIcon from './Icons/CategorieIcon';
import DashboardIcon from './Icons/DashboardIcon';
import FLuxIcon from './Icons/FLuxIcon';
import FournisseurIcon from './Icons/FournisseurIcon';
import HomeIcon from './Icons/HomeIcon';
import ProduitIcon from './Icons/ProduitIcon';
import StockIcon from './Icons/StockIcon';

import './sideBar.css'

const SideBar = () => {
    return (
        // <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    {/* <li className="nav-item">
                        <Link to='/home' className="nav-link active" aria-current="page">
                            <span data-feather="home" className="align-text-bottom"><HomeIcon /></span>
                            Home
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link active" aria-current="page">
                            <span data-feather="home" className="align-text-bottom"><DashboardIcon /></span>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/stock' className="nav-link">
                            <span data-feather="file" className="align-text-bottom"><StockIcon /></span>
                            Stock
                        </Link >
                    </li>
                    <li className="nav-item">
                        <Link to='/produit' className="nav-link" >
                            <span data-feather="shopping-cart" className="align-text-bottom"><ProduitIcon /></span>
                            Produit
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='categorie' className="nav-link">
                            <span data-feather="users" className="align-text-bottom"><CategorieIcon /></span>
                            Catégories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='fournisseur' className="nav-link">
                            <span data-feather="bar-chart-2" className="align-text-bottom"><FournisseurIcon /></span>
                            Fournisseurs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='flux' className="nav-link">
                            <span data-feather="layers" className="align-text-bottom"><FLuxIcon /></span>
                            Flux
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideBar;