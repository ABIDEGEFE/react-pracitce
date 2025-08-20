import { useState } from "react"

function Counter () {
    const [count, setCount] = useState(0)
    return (
       <div className="counter">
        <p>COUNTER: {count}</p>
        <button onClick={() => setCount(count + 1)}>
            increment
        </button>

         <button onClick={() => setCount(count - 1)}>
            decrement
         </button>

         <button onClick={() => setCount(count - count)}>
            reset
         </button>
       </div>
    )
}

export default Counter;