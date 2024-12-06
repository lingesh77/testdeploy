import React, { useState } from 'react';

const ComponentName = () => {
    const [data, setdata] = useState('');
    const [paraview,setparaview] = useState(false);

    function handlingdata() {
        setparaview(true);
    }

    function datavariable(event) {
        setdata(event.target.value);
    }

    return (
        <div className="testingdiv">
            <input 
                placeholder="Enter something" 
                className="input" 
                onChange={datavariable} 
                value={data} 
            />
            <button onClick={handlingdata}>Press</button>
            {paraview && <h1>{data}</h1>}
        </div>
    );
};

export default ComponentName;
