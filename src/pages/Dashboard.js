import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntrepotList from '../components/EntrepotList';
import UserContext from '../context/UserContext';
import { setUserOnStore } from '../feature/user.slice';

const Dashboard = () => {

    const [pageName, setPageName] = useState('Dashboard');
    
    //User
    const [user, setUser] = useState({ userName : 'personne', })

    const [entrepot, setEntrepot] = useState();

    // Store Redux
    const userOn = useSelector((state) => state.userStore.user);

    const contextValue = useContext(UserContext);
    console.log(contextValue);



    const FunctionSelector = () => {
        // setUser(useSelector((state) => state.userStore.user));
    }
    useEffect(() => {
        document.title = pageName;
        console.log('le nom de la page a été changé en Dashboard!');

        // FunctionSelector();
        console.log('test de recherche de id')
        const idUtilisateur = userOn.userID;
        console.log(idUtilisateur)
        axios
            // .get('https://localhost:7183/api/Entrepot?userId=2003')
            .get(`https://localhost:7183/api/Entrepot?userId=${contextValue.user.userId}`)
            .then((res) => {
                console.log("requete envoyé avec le template string et le context useer")
                console.log(res.data[0]);
                setEntrepot(res.data[0]);
            });
    }, []);



// const dispatch = useDispatch();
// const userData = useSelector((state) => state.userStore.user.value);
// // const entrepotData = useSelector((state) => state.entrepotStore);
// const [entrepot, setEntrepot] = useState();

// useEffect(() => {
//     console.log('hey dashboard')
//     console.log(userData)
//     if (!entrepot){
//      axios
//          .get('https://localhost:7183/api/Entrepot?userId=2003')
//          .then((res) => {
//              console.log(res.data)
//             setEntrepot(res.data);
//         });
//     }


// }, [userData, entrepot]);

return (
    <>
        <h1 class="display-3">Dashbord</h1>
        <hr />
        <div className="card mt-3" >
            <div className="card-body">
                {/* <h5 className="card-title">Hello {userData.userName} </h5> */}
                {/* <h5 className="card-title">Hello {userOn.userName} </h5> */}
                <h5 className="card-title">Hello {contextValue.user.userName}  </h5>
                <h6 className="card-subtitle mb-2 text-muted">Information utilisateur</h6>
                {/* <p className="card-text">id : {userData.userId}</p> */}
                <p className="card-text">id :  {contextValue.user.userId}</p>
                {/* <p className="card-text">pseudo : {userData.userName}</p> */}
                {/* <p className="card-text">Entrepot : {entrepot[0].name}</p> */}
                <p className="card-text">Entrepot : Entrepot Name</p>
                {/* <p className="card-text">Entrepot : {entrepot[0].id}</p> */}
                <p className="card-text">Entrepot : Entrepot ID</p>
            </div>
        </div>
        <div className="card mt-3" >
            <div className="card-body">
                {/* <h5 className="card-title">Entrepot {entrepot[0].name} </h5> */}
                <h5 className="card-title">Entrepot Entrepot NAME </h5>
                {/* <p className="card-text">Entrepot : {entrepot[0].id}</p> */}
                <p className="card-text">Entrepot : Entrepot ID</p>
            </div>
        </div>

        <div>
            <EntrepotList entrepot={entrepot} />
        </div>
    </>
);
};

export default Dashboard;