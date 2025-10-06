import React from 'react';
function Counter() {  
    const [num, setNum] = React.useState(0);
    return ( 
    <div>
        <h3>Counter App</h3>
        <p>Click increment button to increment</p>
        <p>{num}</p>
        <button className="btn btn-primary" onClick={()=>{setNum(num+1)}} > Increment  </button>
    </div> 
    );
}

export default  Counter ;