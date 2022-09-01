import React from 'react';

const Stock = () => {
    return (
        <>
            <h1 class="display-3">Stock</h1>
            <hr />

            <div class="d-flex justify-content gap-2 ">
                <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                    <div class="card-body ">
                        <h5 class="card-title">35 %</h5>
                        <p class="card-text">Objectif Annuel</p>
                    </div>
                </div>
                <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <h5 class="card-title">5 000 256 €</h5>
                        <p class="card-text">Valeurs Marchandise en stock </p>
                    </div>
                </div>
                <div class="card shadow-sm p-3 mb-5 bg-body rounded">
                    <div class="card-body">
                        <h5 class="card-title">53</h5>
                        <p class="card-text">Fournisseurs</p>
                    </div>
                </div>

            </div>





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
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>

                </tbody>
            </table>
            </div>
        </>
    );
};

export default Stock;