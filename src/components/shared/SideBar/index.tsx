import { Cog, Phone, Search } from 'lucide-react';
import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { NavItem } from './MainNavigation/NavItem';
import { Profile } from '../Profile';

export function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 mx-1 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          type="text"
          placeholder="Buscar..."
        />
      </div>
      <MainNavigation />
      <div className="mt-auto fle flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Contato" icon={Phone} route="/contact" />
          <NavItem title="Configurações" icon={Cog} route="/settings" />
        </nav>
      </div>
      <div className="flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-5">
        <div className="space-y-1">
          <span className="text-sm/5 font-medium leading-5 text-blue-700">Chamas finalizados</span>
          <p className="text-sm/5 leading-5 text-blue-900">Nossa média de chamados é de 80%</p>
        </div>
        <div className="h-2 rounded-full bg-blue-100">
          <div className="h-2 w-4/5 rounded-full bg-blue-600 "></div>
        </div>
      </div>

      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  );
}
