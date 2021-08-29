import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, decrementByAmount } from '../store/CounterSlice';
const Counter = () => {
    const [value, setValue] = useState()
    let dispatch = useDispatch()
    const { counter } = useSelector((state) => {
        console.log("state", state)
        return {
            counter: state.counter.count
        }
    })
    console.log("counter", counter)
    console.log("value", value)

    return (
        <>
            <div>
                <h2>Counter: {counter} </h2>
                <button onClick={() => {
                    dispatch(increment())
                }}>Icrement</button>
                <button onClick={() => {
                    dispatch(decrement())
                }}>Decrement</button>

                <br /><br />
                <input onChange={(e) => setValue(e.target.value)} placeholder="value" />
                <br />
                <button onClick={() => {
                    dispatch(incrementByAmount(Number(value)))
                }}>Increment by Input</button>

                <button onClick={() => {
                    dispatch(decrementByAmount(Number(value)))
                }}>Decrement by Input</button>
            </div>
        </>
    )
}

export default Counter
