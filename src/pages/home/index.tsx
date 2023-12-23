import { useDispatch, useSelector } from 'react-redux';
import { ActionsButton } from '../../components/redux/Actions';
import { LayoutApp } from '../../template/App';
import { RootState } from '../../store';
import { useState } from 'react';
import { incrementWithAmount } from '../../features/counterSlice';

export function Home() {
  const [amount, setAmount] = useState(0);
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  function addAmount() {
    dispatch(incrementWithAmount(amount));
  }

  return (
    <LayoutApp>
      <h1>Delliv - Início</h1>
      <ActionsButton />
      <p>{count}</p>
      <br />
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <button onClick={addAmount} className="bg-blue-600 text-white p-4" type="button">
        somar
      </button>
    </LayoutApp>
  );
}
