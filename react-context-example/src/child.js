import react, { useContext } from 'react';
import { GlobalContext } from './contextState/globalState';

const Child = () => {
    const { state, increment, decrement } = useContext(GlobalContext)

    return (
        <div>
            <h3>Child Component</h3>
            <h1>Value coming from Parent {state}</h1>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    )
}

export default Child
