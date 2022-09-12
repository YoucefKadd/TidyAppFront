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
import { useDispatch, useSelector } from 'react-redux';

// context
import UserContext from './context/UserContext';


function App() {
  // const [connected, setConnected] = useState(false);
  // const [userConnected, setUserConnected] = useState();
  // const [userConnected, setUserConnected] = useState(useSelector((state) => state.userStore.user.value))

  const [user, setUser] = useState();
  const contextValue = {
    user,
    updateUser: setUser
  }

  const logged = useSelector((state) => state.userStore.userLogged);
  // const [auth, setAuth] = useState(false);
  return (

    <UserContext.Provider value={contextValue}>
      <div className="App">
        {/* La partie Menu / Navigation */}
        <Header value={contextValue}/>
        {/* {auth ? */}
        <div className="container-fluid">
          <div className="row">
            <Routes>
              <Route path='*' element={<Home />} />
              <Route path='/home' element={<Home />} />
              {/* <Route path='/login' element={<Login setConnected={setConnected} setUserConnected={setUserConnected}/>} /> */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
        </div>
        {/* : <Login setAuth={setAuth}/>
      } */}

      </div>
    </UserContext.Provider>

  );
}

export default App;
