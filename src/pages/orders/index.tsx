import { useDispatch, useSelector } from 'react-redux';
import { LayoutApp } from '../../template/App';
import { useEffect, useState } from 'react';
import { fetchOrders, updateOrderStatus } from '../../features/orderSlice';
import { Modal } from '../../components/shared/Modal';
import { toast } from 'react-toastify';

const translateStatus = (status) => {
  const statusMap = {
    opened: 'Aberto',
    done: 'Finalizado',
    canceled: 'Cancelado',
    progress: 'Andamento',
  };
  return statusMap[status] || status;
};

const getStatusColorClass = (status) => {
  const colorMap = {
    opened: 'blue',
    done: 'green',
    canceled: 'red',
    progress: 'blue',
  };

  const color = colorMap[status] || 'gray';
  const classes = `bg-${color}-100 text-${color}-800`;
  console.log(`Status: ${status}, Classes: ${classes}`);
  return classes;
};

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDay = String(day).padStart(2, '0');
  const formattedMonth = String(month).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedDay}/${formattedMonth}/${year} - ${formattedHours}:${formattedMinutes}`;
};

export function Orders() {
  const [filterStatus, setFilterStatus] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    description: '',
    orderId: null,
    selectedStatus: '',
  });
  const orderState = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const imageProfile = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';

  useEffect(() => {
    dispatch(fetchOrders(filterStatus));
  }, [filterStatus]);

  const handleOrder = (order) => {
    setSelectedOrderId(order.id);
    setModalData({
      title: 'Alterar Status do Pedido',
      description: `Qual é o próximo status para o pedido de ${order.customer}?`,
      orderId: order.id,
      selectedStatus: '', // Inicialize selectedStatus
    });
    setOpen(true);
  };

  const handleUpdateStatus = async () => {
    try {
      if (!modalData || !modalData.orderId || !modalData.selectedStatus) {
        console.error('Selecione um novo status antes de atualizar ou houve um problema com os dados.');
        return;
      }

      await dispatch(updateOrderStatus({ orderId: modalData.orderId, status: modalData.selectedStatus }));

      setOpen(false);

      dispatch(fetchOrders(filterStatus));

      const selectedOrder = orderState.orders.find((order) => order.id === modalData.orderId);
      if (!selectedOrder.user && user) {
        await dispatch(updateOrderStatus({ orderId: modalData.orderId, userId: user.id }));
      }
      toast.success('Status atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar o status:', error.message);
      // ... (restante do código de tratamento de erro)
    }
  };

  return (
    <LayoutApp>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mb-4">Delliv - Rastreio Fácil</h1>
        <div className="ml-auto">
          <select
            className="p-0.5 border rounded-md"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="opened">Aberto</option>
            <option value="done">Finalizado</option>
            <option value="canceled">Cancelado</option>
            <option value="progress">Andamento</option>
          </select>
        </div>
      </div>
      {orderState.loading && <>Loading...</>}
      {!orderState.loading && orderState.error ? <>Error: {orderState.error}</> : null}
      {!orderState.loading && orderState.orders.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-center">
            <thead>
              <tr>
                <th className="p-2 border-b text-xs">Cliente</th>
                <th className="p-2 border-b text-xs">Endereço</th>
                <th className="p-2 border-b text-xs">Entregador</th>
                <th className="p-2 border-b text-xs">Pedido em</th>
                <th className="p-2 border-b text-xs">Status</th>
                <th className="p-2 border-b text-xs">-</th>
              </tr>
            </thead>
            <tbody>
              {orderState.orders.map((order) => (
                <tr key={order.id}>
                  <td className="p-2 border-b text-xs flex items-center">
                    <img src={imageProfile} alt="Nome" className="h-6 w-6 rounded-full me-2" />
                    <p>{order.customer}</p>
                  </td>
                  <td className="p-2 border-b text-xs text-zinc-500 truncate">{order.address}</td>
                  <td className="p-2 border-b text-xs">{order.user?.name || '-'}</td>
                  <td className="p-2 border-b text-xs">{formatDate(order.created_at)}</td>
                  <td className="p-2 border-b text-xs">
                    <span
                      className={`font-medium rounded-full text-xs px-2.5 py-0.5 ${getStatusColorClass(order.status)}`}
                    >
                      {translateStatus(order.status)}
                    </span>
                  </td>
                  <td className="p-2 border-b">
                    <button
                      className={`text-xs bg-blue-500 text-white rounded-md px-2 py-1 hover:bg-blue-600 ${
                        !['opened', 'progress'].includes(order.status) ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      onClick={() => handleOrder(order)}
                      disabled={!['opened', 'progress'].includes(order.status)}
                    >
                      Prosseguir
                    </button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <div className="flex flex-col gap-4">
                        <h1 className="text-2xl">{modalData.title}</h1>
                        <p>{modalData.description}</p>
                        <select
                          value={modalData.selectedStatus}
                          onChange={(e) => setModalData({ ...modalData, selectedStatus: e.target.value })}
                        >
                          <option value="opened">Aberto</option>
                          <option value="done">Finalizado</option>
                          <option value="canceled">Cancelado</option>
                          <option value="progress">Andamento</option>
                        </select>
                        <button
                          className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-600"
                          onClick={() => handleUpdateStatus(modalData.selectedStatus)}
                        >
                          Atualizar Status
                        </button>
                      </div>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>Não há pedidos com esse status</>
      )}
    </LayoutApp>
  );
}
