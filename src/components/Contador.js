import React, { useState, Fragment } from 'react';
import _ from 'lodash';


const Contador = () => {
    const [ count, setCount ] = useState(1);

    const [ numeros, setNumeros ] = useState([1,2,3,4,5,6,7,8,9]);

    const pushNumero = () => {
        let lastIndexValue = _.last(numeros)


        setNumeros([
            ...numeros, lastIndexValue + 1
        ])


        
    }

    return (  
        <Fragment>            
            <button onClick={pushNumero}>Push</button>

            <ul>
                {
                    numeros.map( (e, index) => {
                       return <li key={index}>
                             {e}
                        </li>
                    })
                }
            </ul>
        </Fragment>
     );
}
 
export default Contador;