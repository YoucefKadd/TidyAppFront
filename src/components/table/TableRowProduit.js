import axios from 'axios';
import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduit } from '../../feature/produits.slice';

import './TableRowProduit.css'

import DeleteIcons from '../Icons/DeleteIcons';
import EditIcons from '../Icons/EditIcons';
// import { useDispatch } from 'react-redux';




const TableRowProduit = ({ produit }) => {

    // UseRef pour garder la valeurs du formulaire d'édition
    const nameProduitInput = useRef();
    const qteStocktInput = useRef();
    const prixInput = useRef();
    const qrCodeInput = useRef();

    // Redux Toolkit
    const dispatch = useDispatch();
    const entrepotId = useSelector((state) => state.entrepotStore.entrepot.id)

    // State
    const [edit, setEdit] = useState(false);

    // Les fonction handle

    // Permet la supression
    const supprimerProduit = async (id) => {
        console.log("l element avec cet id va etre supprimer : " + id)
        axios.delete(`https://localhost:7183/api/Produit/${id}`)
            .then((res) => {

                if (res.status === 200) {
                    console.log('l element est bine supprimé')
                    dispatch(deleteProduit(id))
                }
            })
    }

    // Edition d'un produit DOM et BDD
    const editerProduit = (id, entrepotId) => {
        setEdit(false);
        const nameStatic = nameProduitInput.current.value;
        const qrCodeStatic = qrCodeInput.current.value;
        const prixStatic = prixInput.current.value;
        const qteStockStatic = qteStocktInput.current.value;

        console.log({
            nameStatic,
            qrCodeStatic,
            prixStatic,
            qteStockStatic
        })

        const produitDto = {
            id : id,
            name: nameStatic,
            ref: qrCodeStatic,
            description: "descripProduit",
            prix: prixStatic,
            image: "NoImage",
            qteStock: qteStockStatic,
            entrepotId : entrepotId
        }
        console.log(produitDto)

        axios.put('https://localhost:7183/api/Produit', produitDto)
        .then((res) => {
            // dispatch(editerProduit([id, produitDto.name,produitDto.ref,produitDto.prix,produitDto.qteStock, produitDto.entrepotId]))
            console.log(res)
            dispatch(editerProduit({id, produitDto}))
            // console.log([produitDto, id])
        })

    }



    return (
        <>
            {edit ?
                (<>
                    <td><input type="text" className="form-control edit-name" defaultValue={produit.name} autoFocus ref={nameProduitInput} /></td>
                    <td><input type="number" className="form-control edit-qte" defaultValue={produit.qteStock} ref={qteStocktInput} /></td>
                    <td><input type="number" className="form-control edit-prix" defaultValue={produit.prix} ref={prixInput} /></td>
                    {/* <td>{produit.prix}€</td> */}

                    {/* <td><input type="text" className="form-control" defaultValue={produit.prix * produit.qteStock}  ref={produitInput} /></td> */}
                    <td>{produit.prix * produit.qteStock}€</td>
                    <td>none</td>

                    <td><input type="text" className="form-control" defaultValue={produit.ref} ref={qrCodeInput} /></td>
                    {/* <td>{produit.ref}</td> */}
                    <td colSpan="2" className='' onClick={() => editerProduit(produit.id, entrepotId)}>
                        <div className="w-auto btn btn-sm btn-primary" >Valider</div>
                    </td>

                </>
                ) : (
                    <>
                        <th scope="row">{nameProduitInput.current ? nameProduitInput.current.value : produit.name}</th>

                        {/* <th scope="row">{produit.name}</th> */}
                        <td>{qteStocktInput.current ? qteStocktInput.current.value : produit.qteStock}</td>

                        <td>{prixInput.current ? prixInput.current.value : produit.prix} €</td>
                        {/* <td>{produit.prix}€</td> */}

                        {/* <td>{produitInput.current ? produitInput.current.value : produit.prix * produit.qteStock} €</td> */}
                        <td>{produit.prix * produit.qteStock}€</td>
                        <td>none</td>

                        <td>{qrCodeInput.current ? qrCodeInput.current.value : produit.ref}</td>
                        {/* <td>{produit.ref}</td> */}

                        <td className='deleteIcon mx-auto text-center' onClick={() => supprimerProduit(produit.id)}><DeleteIcons /></td>
                        <td className='editIcon text-center' onClick={() => setEdit(!edit)}><EditIcons /></td>
                    </>)}
        </>
    );
};

export default TableRowProduit;