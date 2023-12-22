import { LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://avatars.githubusercontent.com/u/54684348?v=4" alt="Nome" className="h-10 w-10 rounded-full" />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Rafael Rabelo</span>
        <span className="text-sm text-zinc-500 truncate">rafaelrabelodev@gmail.com</span>
      </div>
      <button className="ml-auto" type="button">
        <LogOut className="h-5 w-5 text-red-500" />
      </button>
    </div>
  );
}
