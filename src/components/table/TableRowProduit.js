import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduit, editProduit, setProduitsOnStore } from '../../feature/produits.slice';

import './TableRowProduit.css'

import DeleteIcons from '../Icons/DeleteIcons';
import EditIcons from '../Icons/EditIcons';
import { setCategoriesOnStore } from '../../feature/categorie.slice';
// import { useDispatch } from 'react-redux';




const TableRowProduit = ({ produit, setListProduit, edition }) => {
    // ({ produit, categorieList, setListProduit })
    // UseRef pour garder la valeurs du formulaire d'édition
    const nameProduitInput = useRef();
    const qteStocktInput = useRef();
    const prixInput = useRef();
    const qrCodeInput = useRef();
    const catSelectInput = useRef();

    const [categorieSelected, setCategorieSelected] = useState(0);
    const [catName, setCatName] = useState('');


    // Redux Toolkit
    const dispatch = useDispatch();
    const entrepotId = useSelector((state) => state.entrepotStore.entrepot.id)
    const categorieList = useSelector((state) => state.categorieStore.categories);
    const [catData, setCatData] = useState(categorieList)
    //const categorieList2 = categorieList;

    // const edition = useRef(false);

    // State
    const [edit, setEdit] = useState(false);

    const [editFinish, setEditFinish] = useState(0);


    useEffect(() => {

        let ctgrTemp = categorieList?.find(a => a.id === categorieSelected)
        setCatName(ctgrTemp)

        axios
            .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduitsOnStore(res.data))
                setListProduit(res.data)
                // console.log(listProduit[0].name)
                // formRef.current.reset();
            });
        axios
            .get(`https://localhost:7183/api/Famille?entrepotId=${entrepotId}`)
            .then((res) => {
                console.log("Oui j'ai pappelé la famille")
                console.log(res.data)
                dispatch(setCategoriesOnStore(res.data));

            });
    }, [edition])

    useEffect(() => {
        axios
            .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
            .then((res) => {
                console.log(res);
                dispatch(setProduitsOnStore(res.data))
                setListProduit(res.data)
                // console.log(listProduit[0].name)
                // formRef.current.reset();
            });
    }, [editFinish, dispatch])
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
    // fonction handle pour la selection de categorie
    const selectHandleChange = (e) => {
        console.log("je rentre dans la fonction handle change")
        setCategorieSelected(e.target.value);
        console.log(e.target.value)
        console.log(categorieList?.find(a => a.id == e.target.value))
        console.log(categorieList?.find(a => a.id == e.target.value).name)
        let ctgr = categorieList?.find(a => a.id == e.target.value)
        setCatName(ctgr.name)
        // categorieList?.map((a) => {
        //     //  if (a.id === produit.familleId)
        //     if (a.id === categorieSelected)
        //         setCatName(a.name)
        //         console.log(a)
        // })
    }

    // Edition d'un produit DOM et BDD
    const editerProduit = (id, entrepotId) => {
        setEdit(false);
        // setEditFinish(editFinish + 1);
        // setEdition(!edition);
        // console.log(nameProduitInput.current.value)
        const nameStatic = nameProduitInput.current.value;
        const qrCodeStatic = qrCodeInput.current.value;
        const prixStatic = prixInput.current.value;
        const qteStockStatic = qteStocktInput.current.value;
        // console.log('heyyy' + catSelectInput.current.value)
        // const familleSelectedStatic = catSelectInput.current.value;
        const familleSelectedStatic = categorieSelected;
        // console.log("familleSelectedStatic : " + familleSelectedStatic)
        // console.log("familleSelectedStatic : " + categorieSelected)
        // console.log("familleSelectedStatic : " + catSelectInput)


        console.log({
            nameStatic,
            qrCodeStatic,
            prixStatic,
            qteStockStatic,
            familleSelectedStatic
        })

        const produitDto = {
            id: id,
            name: nameStatic,
            ref: qrCodeStatic,
            description: "descripProduit",
            prix: prixStatic,
            image: "NoImage",
            qteStock: qteStockStatic,
            entrepotId: entrepotId,
            familleId: familleSelectedStatic
        }
        console.log(produitDto)

        // console.log(catName)
        // categorieList?.map((a) => {
        //     //  if (a.id === produit.familleId)
        //     if (a.id === familleSelectedStatic){
        //         setCatName(a.name)
        //     }
        // })
        // console.log(catName)


        axios.put('https://localhost:7183/api/Produit', produitDto)
            .then((res) => {
                // dispatch(editerProduit([id, produitDto.name,produitDto.ref,produitDto.prix,produitDto.qteStock, produitDto.entrepotId]))
                console.log(res)
                dispatch(editProduit({ id, produitDto }));
                // console.log([produitDto, id])
                axios
                    .get(`https://localhost:7183/api/Produit?entrepotId=${entrepotId}`)
                    .then((res) => {
                        console.log("ICI")
                        console.log(res);
                        dispatch(setProduitsOnStore(res.data))
                        setListProduit(res.data)
                        // console.log(listProduit[0].name)
                        // formRef.current.reset();
                        // setTableChange(!tableChange)

                    });
            })


        // setEditFinish(editFinish + 1);
        // edition.current = !edition.current;

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
                    <td>
                        {/* <select class="form-select form-select" aria-label=".form-select-sm example" value={categorieSelected} onChange={selectHandleChange}> */}
                        <select class="form-select form-select" aria-label=".form-select-sm example" value={categorieSelected} onChange={selectHandleChange}>
                            {/* <option selected >Selectioner une catégorie</option> */}
                            {
                                categorieList?.map((sel) => (
                                    // <option selected defaultValue={sel.name}  ref={catSelectInput} key={sel.id} value={sel.id}>{sel.name}</option>
                                    <option key={sel.id} value={sel.id}>{sel.name}</option>
                                ))
                            }
                            {/* <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option> */}
                        </select>
                    </td>
                    <td className='no_display'>
                        <input type="text" className='form-control edit-prix' defaultValue={catName} ref={catSelectInput} />
                    </td>

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
                        <td>
                            {
                                categorieList?.map((a) => {
                                    //  if (a.id === produit.familleId)
                                    if (a.id === produit.familleId)
                                        return a.name
                                })
                            }
                        </td>

                        <td>{qrCodeInput.current ? qrCodeInput.current.value : produit.ref}</td>
                        {/* <td>{produit.ref}</td> */}

                        <td className='deleteIcon mx-auto text-center' onClick={() => supprimerProduit(produit.id)}><DeleteIcons /></td>
                        <td className='editIcon text-center' onClick={() => setEdit(!edit)}><EditIcons /></td>
                    </>)}
        </>
    );
};

export default TableRowProduit;