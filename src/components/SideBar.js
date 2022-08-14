import React from 'react';
import { Link } from "react-router-dom";

import './sideBar.css'

const SideBar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to='/dashboard' className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/stock' className="nav-link" href="#">
                            <span data-feather="file" className="align-text-bottom"></span>
                            Stock
                        </Link >
                    </li>
                    <li className="nav-item">
                        <Link to='/produit' className="nav-link" href="#">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Produit
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='categorie' className="nav-link" href="#">
                            <span data-feather="users" className="align-text-bottom"></span>
                            Catégories
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='fournisseur' className="nav-link" href="#">
                            <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                            Fournisseurs
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='flux' className="nav-link" href="#">
                            <span data-feather="layers" className="align-text-bottom"></span>
                            Flux
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideBar;