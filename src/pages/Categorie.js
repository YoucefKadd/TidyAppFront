import React from 'react';
import DeleteIcons from '../components/Icons/DeleteIcons';

const Categorie = () => {
    return (
        <>
            <h1 class="display-3">Categorie</h1>
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
                        <tr>
                            <th scope="row">Scolaire</th>
                            <td>5</td>
                            <td>1.50 €</td>
                            <td>15.99 €</td>
                            <td>Most</td>
                            <td>SCOL</td>
                            <td><DeleteIcons /></td>
                        </tr>
                        <tr>
                            <th scope="row">Tech</th>
                            <td>1</td>
                            <td>129 €</td>
                            <td>129 €</td>
                            <td>Non Scloaire</td>
                            <td>TECH</td>
                            <td>
                                <DeleteIcons />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Autre</th>
                            <td>1</td>
                            <td>13.49 €</td>
                            <td>13.49 €</td>
                            <td>Non Scloaire</td>
                            <td>AUTR</td>
                            <td><DeleteIcons /></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Categorie;