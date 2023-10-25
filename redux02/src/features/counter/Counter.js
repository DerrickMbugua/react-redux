import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";


export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      
    </div>
  )
}
