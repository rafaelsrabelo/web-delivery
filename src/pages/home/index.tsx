import { useState } from 'react';
import { LayoutApp } from '../../template/App';
interface User {
  name: string;
  email: string;
  // Adicione outras propriedades conforme necessário
}

function getUser(): User {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

export function Home() {
  const [user, setUser] = useState(getUser());

  return (
    <LayoutApp>
      <h1 className="text-2xl font-bold mb-4">Delliv - Início</h1>
      <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50" role="alert">
        <span className="font-medium">Olá {user.name},</span> esse aplicativo de rastreamento de entregas permite aos usuários autenticados visualizar uma lista de pedidos, atualizar o status de cada pedido e fornecer recursos de autenticação e segurança.
      </div>
    </LayoutApp>
  );
}
