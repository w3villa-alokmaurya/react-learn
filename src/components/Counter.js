import React, { useState } from "react";

export default function Counter(props) {
    const [value, setvalue] = useState(0) // state use state

    // increment value using setState
    const incrementValue = ()=>{
        setvalue(value+1)
    }

        // derement value using setState

    const decrementvalue = ()=>{
        setvalue(value-1)
    }

    // conditional rendering

    const valueVal = ()=>{
        if (value>5) {
            return <h1>{value} is greater than 5</h1>
        }
        else{
            return <h1>{value} is less than 5</h1>
        }
    }

    return (
        <div className="flex-row">
            <button onClick={incrementValue}>+</button>
            {valueVal()} 
            <button onClick={decrementvalue}>-</button>

        </div>
    );
}