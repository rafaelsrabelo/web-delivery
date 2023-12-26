import { useDispatch, useSelector } from 'react-redux';
import { LayoutApp } from '../../template/App';
import { useEffect } from 'react';
import { fetchOrders } from '../../features/orderSlice';

export function Orders() {
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  return (
    <LayoutApp>
      <h1>
        Delliv - Pedidos
      </h1>
      {orderState.loading && <>loading...</>}
      {!orderState.loading && orderState.error ? (
        <>Error: {orderState.error}</>
      ) : null}
      {!orderState.loading && orderState.orders.length ? (
        <ul>
          {orderState.orders.map((order) => (
            <li key={order.id}>{order.customer}</li>
          ))}
        </ul>
      ) : (
        <>No orders available.</>
      )}
    </LayoutApp>
    );
}
