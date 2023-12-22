import { Home, ListOrdered, UserRound } from 'lucide-react';
import { NavItem } from './NavItem';

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Início" icon={Home} />
      <NavItem title="Pedidos" icon={ListOrdered} />
      <NavItem title="Perfil" icon={UserRound} />
    </nav>
  );
}
