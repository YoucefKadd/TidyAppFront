import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcons from '../components/Icons/DeleteIcons';
import TableRowCategorie from '../components/table/TableRowCategorie';
import { addCategorie, setCategoriesOnStore } from '../feature/categorie.slice';

const Categorie = () => {

    // Redux Toolkit
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categorieStore.categories);
    const entrepotId = useSelector((state) => state.entrepotStore.entrepot.id);


    // Catégorie DTO
    const [nomCategorie, setNomCategorie] = useState('');
    const [refCategorie, setRefCategorie] = useState('');
    const [descriptionCategorie, setDescriptionCategorie] = useState('');


    // Ajout d'une catégorie DOM & BDD
    const ajouterCategorie = async () => {

        const categorieDto = {
            name: nomCategorie,
            ref: refCategorie,
            description: descriptionCategorie,
            entrepotId: entrepotId
        };

        axios
            .post('https://localhost:7183/api/Famille', categorieDto, { withCredentials: true })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Ajout catégorie ' + categorieDto.name + " réussi !");
                    console.log(res);
                    dispatch(addCategorie(categorieDto));

                    axios
                        .get(`https://localhost:7183/api/Famille?entrepotId=${entrepotId}`)
                        .then((res) => {
                            console.log(res.data)
                            dispatch(setCategoriesOnStore(res.data));

                    });


                }
            })

    }



    return (
        <>
            <h1 class="display-3">Categorie</h1>
            <hr />

            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <p className='display-7'>Ajouter un catégorie</p>
                <div className="form-ajoutProduit  w-100 m-auto" >

                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control " placeholder="Nom catégorie" aria-label="Nom catégorie" required onChange={e => setNomCategorie(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="REF" aria-label="Ref" required onChange={e => setRefCategorie(e.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Description" aria-label="Description" required onChange={e => setDescriptionCategorie(e.target.value)} />
                        </div>
                        <div className="w-auto btn btn-sm btn-primary" onClick={ajouterCategorie}>Ajouter</div>

                    </div>
                </div>

            </div>
            <hr />



            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <table className='table  table-striped table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Items</th>
                            <th scope="col">Prix Minimum</th>
                            <th scope="col">Prix Maximum</th>
                            <th scope="col">Note</th>
                            <th scope="col">Reference</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoriesData?.map((ctg) => (
                                <tr >
                                    <TableRowCategorie key={ctg.id} categorie={ctg} />
                                </tr>
                            ))
                        }
                        {/* <tr>
                            <th scope="row">Scolaire</th>
                            <td>5</td>
                            <td>1.50 €</td>
                            <td>15.99 €</td>
                            <td>Most</td>
                            <td>SCOL</td>
                            <td><DeleteIcons /></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Categorie;