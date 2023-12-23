import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../features/counterSlice';

export function ActionsButton() {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
      <button type="button" onClick={() => dispatch(increment())} className="px-4 py-2 text-white bg-green-700">
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement())} className="px-4 py-2 text-white bg-red-700">
        Decrement
      </button>
    </div>
  );
}
