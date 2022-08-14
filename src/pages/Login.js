import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const submit = async (e) => {
        // création d'un objet afin user pour l'envoyer en requete
        const user = {
            email: email,
            password: password
        }
        axios.post('https://localhost:7183/api/Auth/login', user, {withCredentials: true})
            .then(res => {
                console.log(res);
                setToken(res.data);
               
                // if (res.status === 200) { 
                //     console.log('Inscription réussie ! vous allez être redirigé ver la page de login');
                //     // setRedirect(true);
                //  }
                // else { console.log("Echec de l'inscription") }

                // console.log(res.data);
            });
    };

    // fonction pour tester une requete pour les routes protégé
    // const tokenAuthorize = async (e) => {
    //     axios.get('https://localhost:7183/WeatherForecast', {
    //         headers: { authorization: `bearer ${token}` }
    //         },
    //         {withCredentials: true})
    //         .then(res => {
    //             console.log(res);
               
    //             // if (res.status === 200) { 
    //             //     console.log('Inscription réussie ! vous allez être redirigé ver la page de login');
    //             //     // setRedirect(true);
    //             //  }
    //             // else { console.log("Echec de l'inscription") }

    //             // console.log(res.data);
    //         });
    // }


    return (
        <div>
            <form>
               <h1 className="h3 mb-3 fw-normal">Se connecter</h1>

              <div className="form-floating">
                <input type="email" className="form-control" placeholder="yoka@gmail.com" required onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="w-100 btn btn-lg btn-primary" onClick={submit}>Se connecter</div>
              <p className="mt-5 mb-3 text-muted ">Yoka &copy; 2022</p>
              
              {/* <p>Test d'une requete Auhtorisation</p>
              <div className="w-100 btn btn-lg btn-primary" onClick={tokenAuthorize}>Tester</div> */}
          
          </form>
        </div>
    );
};

export default Login;