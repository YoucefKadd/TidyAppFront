import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategorie, editCategorie } from '../../feature/categorie.slice';
import DeleteIcons from '../Icons/DeleteIcons';
import EditIcons from '../Icons/EditIcons';

const TableRowCategorie = ({ categorie }) => {

    // UseRef pour garder la valeurs du formulaire d'édition
    const nameCategorieInput = useRef();
    const qrCodeInput = useRef();
    const descriptionInput = useRef();
    // const nameCategorieInput = useRef();

    // Redux Toolkit
    const dispatch = useDispatch();
    const entrepotId = useSelector((state) => state.entrepotStore.entrepot.id);

    // State
    const [edit, setEdit] = useState(false);





    // LES FONCTIONS HANDLE
    // EDITION
    const editerCategorie = async (id, entrepotId) => {
        // console.log("l'element avec cet id va être éditer : " + id);
        console.log(id);
        console.log(entrepotId);
        setEdit(false);
        const nameStatic = nameCategorieInput.current.value;
        const refStatic = qrCodeInput.current.value;
        const descriptionStatic = descriptionInput.current.value;

        console.log({
            nameStatic,
            refStatic
        });

        const categorieDto = {
            id : id,
            name: nameStatic,
            ref: refStatic,
            description: descriptionStatic,
            image: "noImage",
            entrepotId: entrepotId
        }

        console.log(categorieDto);

        axios.put('https://localhost:7183/api/Famille', categorieDto)
        .then((res) => {
            console.log(res);
            dispatch(editCategorie({id, categorieDto}))
        })

    }
    // SUPRESSION
    const supprimerCategorie = async (id) => {
        console.log(categorie)
        console.log("l'element avec cet id va être supprimer : " + id);
        axios.delete(`https://localhost:7183/api/Famille/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    console.log('l element est bine supprimé')
                    dispatch(deleteCategorie(id))
                }
            })

        // axios etc
    }
    // 


    return (
        <>
            {edit ?
                (
                    <>
                        <td><input type="text" className='form-control edit-name' defaultValue={categorie.name} autoFocus ref={nameCategorieInput} /></td>
                        <td>5</td>
                        <td>1.50 €</td>
                        <td>15.99 €</td>
                        {/* <td>Most</td> */}
                        <td><input type="text" className='form-control edit-ref' defaultValue={categorie.description} autoFocus ref={descriptionInput} /></td>
                        <td><input type="text" className='form-control edit-ref' defaultValue={categorie.ref} autoFocus ref={qrCodeInput} /></td>
                        <td colSpan="2" className='' onClick={() => editerCategorie(categorie.id, entrepotId)}>
                            <div className="w-auto btn btn-sm btn-primary" >Valider</div>
                        </td>

                    </>
                ) : (
                    <>
                        <th scope="row">{nameCategorieInput.current ? nameCategorieInput.current.value : categorie.name}</th>
                        <td>5</td>
                        <td>1.50 €</td>
                        <td>15.99 €</td>
                        {/* <td>Most</td> */}
                        <td>{descriptionInput.current ? descriptionInput.current.value : categorie.description}</td>
                        <td>{qrCodeInput.current ? qrCodeInput.current.value : categorie.ref}</td>

                        <td className='deleteIcon mx-auto text-center' onClick={() => supprimerCategorie(categorie.id)}><DeleteIcons /></td>
                        <td className='editIcon text-center' onClick={() => setEdit(!edit)}><EditIcons /></td>
                    </>
                )}

        </>
    );
};

export default TableRowCategorie;