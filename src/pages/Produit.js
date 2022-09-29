import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
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

    const categorieList = useSelector((state) => state.categorieStore.categories);
    const [categorieSelected, setCategorieSelected] = useState(0);

    const [tableChange, setTableChange] = useState(false)
    const edition = useRef(false);


    // Redux Store
    const dispatch = useDispatch();
    const produitsData = useSelector((state) => state.produitsStore.produits);

    // form Edition
    const [edit, setEdit] = useState(false);

    // const[edition, setEdition] = useState(false)

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
                // console.log(listProduit[0].name)
                // formRef.current.reset();
            });
    }, []);

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
                // console.log(listProduit[0].name)
                // formRef.current.reset();
            });
    }, []);
    useEffect(() => {
        // const idEntrepottmp = 
        // console.log(entrepotId)
        //'https://localhost:7183/api/Produit?entrepotId=12'
        axios
            .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduitsOnStore(res.data))
                setListProduit(res.data)
                // console.log(listProduit[0].name)
                // formRef.current.reset();
            });
    }, [edition]);

    
    // fonction handle pour la selection de categorie
    const selectHandleChange = (e) => {
        setCategorieSelected(e.target.value);
    }

    // Ajout d'un produit DOM et BDD
    const ajouterProduit = async () => {

        const produitDto = {
            name: nomProduit,
            ref: refProduit,
            description: descripProduit,
            prix: prixProduit,
            image: "NoImage",
            qteStock: 0,
            entrepotId: entrepotId,
            familleId: categorieSelected
        }

        console.log("la categorie selectionné est : "  + categorieSelected)

        axios
            .post('https://localhost:7183/api/Produit', produitDto, { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Ajout du produit ' + produitDto.name + " réussi !");
                    console.log(res)
                    dispatch(addProduit(produitDto));

                    axios
                    .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
                    .then((res) => {
                        console.log(res);
                        dispatch(setProduitsOnStore(res.data))
                        setListProduit(res.data)
                        // console.log(listProduit[0].name)
                        // formRef.current.reset();
                    });
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
                        <div className="col">
                            <select class="form-select form-select" aria-label=".form-select-sm example" value={categorieSelected} onChange={selectHandleChange}>
                                <option selected>Selectioner une catégorie</option>
                                {
                                    categorieList?.map((sel) => (
                                        <option value={sel.id}>{sel.name}</option>
                                    ))
                                }
                                {/* <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option> */}
                            </select>
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
                                <tr >
                                    <TableRowProduit key={el.id} produit={el} categorieList={categorieList} setListProduit={() =>setListProduit()} edition={edition}/>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Produit;