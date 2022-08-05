import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e) => {
        // création d'un objet afin user pour l'envoyer en requete
        const user = {
            email: email,
            password: password
        }
        axios.post('https://localhost:7183/api/Auth/login', user, {withCredentials: true})
            .then(res => {
                console.log(res.data.token);
               
                // if (res.status === 200) { 
                //     console.log('Inscription réussie ! vous allez être redirigé ver la page de login');
                //     // setRedirect(true);
                //  }
                // else { console.log("Echec de l'inscription") }

                // console.log(res.data);
            });
    }


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
          </form>
        </div>
    );
};

export default Login;