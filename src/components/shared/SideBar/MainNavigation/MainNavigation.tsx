import { Cog, Home, ListOrdered, Phone, UserRound } from 'lucide-react';
import { NavItem } from './NavItem';

export function MainNavigation() {
  return (
    <aside>
      <nav className="space-y-0.5">
        <NavItem route="/" title="Início" icon={Home} />
        <NavItem route="/orders" title="Pedidos" icon={ListOrdered} />
        <NavItem route="/auth/signin" title="Perfil" icon={UserRound} />
        <div className="mt-auto fle flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Contato" icon={Phone} route="/contact" />
            <NavItem title="Configurações" icon={Cog} route="/settings" />
          </nav>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-5">
          <div className="space-y-1">
            <span className="text-sm/5 font-medium leading-5 text-blue-700">Used space</span>
            <p className="text-sm/5 leading-5 text-blue-900">Lore ipsum 80$% lore ipsum lore ipsum</p>
          </div>
          <div className="h-2 rounded-full bg-blue-100">
            <div className="h-2 w-4/5 rounded-full bg-blue-600 "></div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
