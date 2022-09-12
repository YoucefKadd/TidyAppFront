import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { setUserLogged, setUserOnStore } from '../feature/user.slice';
import { setEntrepotOnStore } from '../feature/entrepot.slice';
import { useContext } from 'react';
import UserContext from '../context/UserContext';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [token, setToken] = useState('');
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState();

    const [redirect, setRedirect] = useState(false);

    // REDUX TOOLKIT
    const dispatch = useDispatch();
    // const selector = useSelector();
    // const userData = useSelector((state) => state.userStore.user);

    const contextValue = useContext(UserContext);



    useEffect(() => {
        document.title = 'Login';
    })

    //let redirect = false ;
    const submit = async (e) => {
        // création d'un objet afin user pour l'envoyer en requete
        const userDto = {
            email: email,
            password: password
        }
        axios
            .post('https://localhost:7183/api/Auth/login', userDto, { withCredentials: true })
            .then((res) => {
                console.log(res);
                console.log(res.data.value.token);
                console.log(res.data.value.userName);
                console.log(res.data.value.userId);
                setUserId(res.data.value.userId);
                console.log('l id de user est' + userId)



                if (res.status === 200) {
                    console.log('Connexion réussie ! vous allez être redirigé ver votre Dashboard');
                    setToken(res.data.value.token);
                    setUserName(res.data.value.userName);
                    setUserId(res.data.value.userId);

                    // permet de mettre les données reçu par res.data dans le store
                    dispatch(setUserOnStore(res.data.value));

                    contextValue.updateUser(res.data.value);
                    console.log(contextValue.user);
                    
                    setUser({
                        token: token,
                        userId: userId,
                        userName: userName
                    });

                    console.log('dans la page Login, id user avant requete de l entreport est : ')
                    console.log(res.data.value.userId)
                    const idtmp = res.data.value.userId
                    axios
                        .get(`https://localhost:7183/api/Entrepot?userId=${idtmp}`)
                        .then((res) => {
                            console.log(res.data);
                            dispatch(setEntrepotOnStore(res.data[0]));
                        });


                    // props.setConnected(true);
                    // props.setUserConnected({
                    //     token: res.data.value.token,
                    //     userId: res.data.value.userId,
                    //     userName: res.data.value.userName
                    // });
                    setRedirect(true);
                }
                else { console.log("Echec de la conneion") }

                // if (res.status === 200) { 
                //     console.log('Inscription réussie ! vous allez être redirigé ver la page de login');
                //     // setRedirect(true);
                //  }
                // else { console.log("Echec de l'inscription") }

                // console.log(res.data);
            });
    };

    if (redirect) {
        // dispatch(setUserLogged(true));
        // setRedirect(true);
        return <Navigate to="/home" />;
    }
    // return <Navigate to="/dashboard"/>;

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
        <div className="form-signin w-100 m-auto">
            <form>
                <h1 className="h3 mb-3 fw-normal">Se connecter</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="yoka@gmail.com" required onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
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