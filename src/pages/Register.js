import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    // les states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    // fonction pour l'envoie du formulaire
    const submit = (e) => {
        // on utilis e.preventDefault pour bloquer un evenement
        // Ici on l'utiliser pour ne pas racharger la page dans le cas ou on a un "button" de type "submit" au lieu d'une div avec un event Onclick
        // e.preventDefault(); 

        //création d'un objet afin user pour l'envoyer en requet
        const user = {
            username: name,
            password: password,
            email: email
        }
        axios.post('https://localhost:7183/api/Auth/register', user)
            .then(res => {
                console.log(res);
               
                if (res.status === 200) { 
                    console.log('Inscription réussie ! vous allez être redirigé ver la page de login');
                    setRedirect(true);
                 }
                else { console.log("Echec de l'inscription") }

                // console.log(res.data);
            });
    }

    // si l'isncription est réussie on redirige vers la page de login
   
    if (redirect)
    return <Navigate  to="/login" />;

    return (
        <div>
            <form>
                <h1 className="h3 mb-3 fw-normal">S'inscrire</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="Yoka" onChange={e => setName(e.target.value)} />
                    <label htmlFor="floatingInput">Nom</label>
                </div>

                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="yoka@gmail.com" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label for="floatingPassword">Mot de passe</label>
                </div>

                <div className="w-100 btn btn-lg btn-primary" onClick={submit}>Envoyer</div>
                <p className="mt-5 mb-3 text-muted ">Yoka &copy; 2022</p>
            </form>
        </div>
    );
};

export default Register;