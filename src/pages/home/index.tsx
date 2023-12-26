import { useDispatch, useSelector } from 'react-redux';
import { ActionsButton } from '../../components/redux/Actions';
import { LayoutApp } from '../../template/App';

export function Home() {
  return (
    <LayoutApp>
      <h1>Delliv - Início</h1>
      <ActionsButton />
    </LayoutApp>
  );
}
