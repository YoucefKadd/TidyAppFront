import React from 'react';
import { useState } from 'react';

const EntrepotList = (props) => {
    const [entrepot, setEntrepot] = useState(props.entrepot);
    console.log(props.entrepot)


    return (
        <div>
            Liste d'entrepot
            {/* {console.log(entrepot)} */}
            <ul>
                {/* {props.entrepot.map((el) => {
                    <li>hello</li>
                })} */}
            </ul>
        </div>
    );
};

export default EntrepotList;