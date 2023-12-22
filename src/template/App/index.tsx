import { ReactNode } from 'react';
import { SideBar } from '../../components/shared/SideBar';
interface LayoutAppProps {
  children?: ReactNode;
}

export function LayoutApp({ children }: LayoutAppProps) {
  return (
    <div className="">
      <div className="grid min-h-screen grid-cols-app">
        <SideBar />
        <main className="px-4 pb-12 pt-8">{children}</main>
      </div>
    </div>
  );
}
