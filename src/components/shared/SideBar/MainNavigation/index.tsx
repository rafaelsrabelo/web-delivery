import { Home, ListOrdered } from 'lucide-react';
import { NavItem } from './NavItem';

export function MainNavigation() {
  return (
    <aside>
      <nav className="space-y-0.5">
        <NavItem route="/" title="Início" icon={Home} />
        <NavItem route="/orders" title="Pedidos" icon={ListOrdered} />
      </nav>
    </aside>
  );
}
