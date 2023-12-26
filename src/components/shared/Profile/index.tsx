import { LogOut } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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


export function Profile() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  function handleLogout ()  {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/auth/signin')
  }
  
  const imageProfile = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src={imageProfile} alt="Nome" className="h-10 w-10 rounded-full" />
      <div className="flex flex-col truncate">
        {user ? (
          <>
            <span className="text-sm font-semibold text-zinc-700">{user.name}</span>
            <span className="text-sm text-zinc-500 truncate">{user.email}</span>
          </>
        ) : (
          <></>
        )}
      </div>
      <button className="ml-auto" type="button">
        <LogOut className="h-5 w-5 text-red-500" onClick={handleLogout}/>
      </button>
    </div>
  );
}
