import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EntrepotList from '../components/EntrepotList';
import { setUserOnStore } from '../feature/user.slice';

const Dashboard = () => {

    const [pageName, setPageName] = useState('Dashboard');

    const [entrepot, setEntrepot] = useState();

    useEffect(() => {
        document.title = pageName;
        console.log('le nom de la page a été changé en Dashboard!');

        axios
            .get('https://localhost:7183/api/Entrepot?userId=2003')
            .then((res) => {
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
                <h5 className="card-title">Hello Username </h5>
                <h6 className="card-subtitle mb-2 text-muted">Information utilisateur</h6>
                {/* <p className="card-text">id : {userData.userId}</p> */}
                <p className="card-text">id : User ID</p>
                {/* <p className="card-text">pseudo : {userData.userName}</p> */}
                <p className="card-text">pseudo : Username</p>
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