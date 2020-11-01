import React, { useState, Fragment } from 'react';

const Contador = () => {
    const[ count, setCount ] = useState(1);

    const aumentar = () => {
        setCount(count +1)
        console.log(`Me diste ${count}`);
    }  

    const resetCount = () => {
        setCount(0)
    }

    return (  
        <Fragment>
            <p>Cantidad de click {count} </p>
            <button onClick={aumentar}>
                Clickeame 
            </button>
            <button onClick={resetCount}>Resetear contador</button>
        </Fragment>
     );
}
 
export default Contador;