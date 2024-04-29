import { useCounter } from "../hook/useCounter"

const CounterWithCustomHook = () => {

    const { counter, decrement, increment, reset } = useCounter();
    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={increment}> +1 </button>
            <button className="btn btn-warning" onClick={reset}> Reset </button>
            <button className="btn btn-danger" onClick={decrement}> -1 </button>
        </>
    )
}

export default CounterWithCustomHook