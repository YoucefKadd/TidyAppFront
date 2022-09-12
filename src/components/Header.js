import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { useState } from 'react';
import { useEffect } from 'react';
;



const Header = (props) => {
    const contextValue = useContext(UserContext);

    const [userLogged, setUserLogged] = useState(true);
    // const [id, setId] = useState()

    useEffect(() => {
        console.log('ceux ci sont les props de Header :')
        console.log(props)
        if (props.value.user !== undefined) {
            setUserLogged(true)
        } else {
            setUserLogged(false)
        }
    }, [userLogged, props]);

    return (
        <>
            <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow">
                <Link to='home' className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">TIDY APP</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-primary w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                    <div className="navbar-nav">
                        {userLogged ? 
                        <div className="nav-item text-nowrap">
                            <Link to='/' className="nav-link px-3" href="#">Se déconecter</Link>
                        </div>
                        :
                        <div className="nav-item text-nowrap">
                            <Link to='/' className="nav-link px-3" href="#">Se connecter</Link>
                        </div>
                        }
                        {/* <div class="nav-item text-nowrap">
                            <a class="nav-link px-3" href="#">S'inscrire</a>
                        </div> */}
                    </div>
            </header>
        </>
    );
};

export default Header;