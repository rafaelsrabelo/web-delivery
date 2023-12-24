import { LogOut } from 'lucide-react';
import { useState } from 'react';

function getUser() {
  let user = localStorage.getItem('user');
  if(user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}
export function Profile() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://avatars.githubusercontent.com/u/54684348?v=4" alt="Nome" className="h-10 w-10 rounded-full" />
      <div className="flex flex-col truncate">
        {
          user?(
          <>
          
          </>): <></>
        }

      </div>
      <button className="ml-auto" type="button">
        <LogOut className="h-5 w-5 text-red-500" />
      </button>
    </div>
  );
}
