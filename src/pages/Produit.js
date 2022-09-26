import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcons from '../components/Icons/DeleteIcons';
import EditIcons from '../components/Icons/EditIcons';
import TableRowProduit from '../components/table/TableRowProduit';
import TableRow from '../components/table/TableRowProduit';
import UserContext from '../context/UserContext';
import { addProduit, deleteProduit, setProduitsOnStore } from '../feature/produits.slice';

const Produit = () => {

    const [listProduit, setListProduit] = useState([]);
    const entrepotId = useSelector((state) => state.entrepotStore.entrepot.id);
    const contextValue = useContext(UserContext);


    // Produit DTO
    const [nomProduit, setNomProduit] = useState('');
    const [refProduit, setRefProduit] = useState('');
    const [descripProduit, setDescripProduit] = useState('');
    const [prixProduit, setPrixProduit] = useState(0);

    // Redux Store
    const dispatch = useDispatch();
    const produitsData = useSelector((state) => state.produitsStore.produits);

    // form Edition
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        // const idEntrepottmp = 
        console.log(entrepotId)
        //'https://localhost:7183/api/Produit?entrepotId=12'
        axios
            .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduitsOnStore(res.data))
                setListProduit(res.data)
                console.log(listProduit[0].name)
                // formRef.current.reset();
            });
    }, []);

    // Ajout d'un produit DOM et BDD
    const ajouterProduit = async () => {

        const produitDto = {
            name: nomProduit,
            ref: refProduit,
            description: descripProduit,
            prix: prixProduit,
            image: "NoImage",
            qteStock: 0,
            entrepotId: entrepotId
        }

        axios
            .post('https://localhost:7183/api/Produit', produitDto, { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Ajout du produit ' + produitDto.name + " réussi !");
                    console.log(res)
                    dispatch(addProduit(produitDto));
                }
            })
    }

    // Supression d'un produit DOM et BDD
    // const supprimerProduit = async (id) => {
    //     console.log("l element avec cet id va etre supprimer : " + id)
    //     axios.delete(`https://localhost:7183/api/Produit/${id}`)
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 console.log('l element est bine supprimé')
    //                 dispatch(deleteProduit(id))
    //             }
    //         })
    // }

    // Edition d'un produit DOM et BDD
    // const editerProduit = async () => {

    // }

    return (
        <div>
            <h1 class="display-3">Produit</h1>
            <hr />

            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <p className='display-7'>Ajouter un produit</p>
                <div className="form-ajoutProduit  w-100 m-auto" >

                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control " placeholder="Nom produit" aria-label="Nom produit" required onChange={e => setNomProduit(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Prix" aria-label="Prix" required onChange={e => setPrixProduit(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Ref" aria-label="Ref" required onChange={e => setRefProduit(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Description" aria-label="Description" required onChange={e => setDescripProduit(e.target.value)} />
                        </div>
                        <div className="w-auto btn btn-sm btn-primary" onClick={ajouterProduit}>Ajouter</div>

                    </div>
                </div>

            </div>
            <hr />
            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <table className='table  table-striped table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Quantité</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Valeurs</th>
                            <th scope="col">Catégorie</th>
                            <th scope="col">QR CODE</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produitsData?.map((el) => (
                                <tr key={el.id}>
                                    <TableRowProduit key={el.id} produit={el} />
                                </tr>
                            ))
                        }

                        {/* <tr>
                            <th scope="row">East Bag</th>
                            <td>30</td>
                            <td>15.99 €</td>
                            <td>479.7 €</td>
                            <td>Scolaire</td>
                            <td>SCOL001EB</td>
                        </tr>
                        <tr>
                            <th scope="row">Trousse</th>
                            <td>60</td>
                            <td>3.99 €</td>
                            <td>239.4 €</td>
                            <td>Scolaire</td>
                            <td>SCOL001TR</td>
                        </tr>
                        <tr>
                            <th scope="row">Stylos</th>
                            <td>120</td>
                            <td>1.99 €</td>
                            <td>238.8 €</td>
                            <td>Scolaire</td>
                            <td>SCOL001ST</td>
                        </tr>
                        <tr>
                            <th scope="row">AirPods</th>
                            <td>30</td>
                            <td>129 €</td>
                            <td>3 870 €</td>
                            <td>Tech</td>
                            <td>TECH001AP</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Produit;