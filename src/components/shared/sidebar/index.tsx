import { Logo } from './Logo';

export function SideBar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-8"></div>
    </aside>
  );
}
