import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../slice/counterSlice';

function CounterUsingStore() {  
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return ( 
    <div>
        <h3>Counter App Using Redux Store</h3>  
        
        <p>{count}</p>
        <button className="btn btn-primary" onClick={() => dispatch(increment())} > Increment  </button>
        <button className="btn btn-danger" onClick={() => dispatch(decrement())} > Decrement  </button>
    </div> 
    );
}

export default CounterUsingStore;
