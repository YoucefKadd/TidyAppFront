import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const header = () => {
    return (
        <div>
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link to='home' class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">TIDY APP</Link>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                    <div class="navbar-nav">
                        <div class="nav-item text-nowrap">
                            <Link to='/' class="nav-link px-3" href="#">Se connecter</Link>
                        </div>
                        {/* <div class="nav-item text-nowrap">
                            <a class="nav-link px-3" href="#">S'inscrire</a>
                        </div> */}
                    </div>
            </header>
        </div>
    );
};

export default header;