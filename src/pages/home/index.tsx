import { useSelector } from 'react-redux';
import { ActionsButton } from '../../components/redux/Actions';
import { LayoutApp } from '../../template/App';
import { RootState } from '../../store';

export function Home() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <LayoutApp>
      <h1>Delliv - Início</h1>
      <ActionsButton />
      <p>{count}</p>
    </LayoutApp>
  );
}
