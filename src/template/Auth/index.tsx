import { ReactNode } from 'react';
import delieryImage from '/delivery.png';
interface LayoutAuthProps {
  title: string;
  descritpion: string;
  children?: ReactNode; // Para permitir qualquer conteúdo filho
}
export function LayoutAuth({ title, descritpion, children }: LayoutAuthProps) {
  return (
    <div className="relative w-full h-screen bg-blue-500">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[400px] w-full  mx-auto bg-white p-8 rounded-md">
          <div className="text-center">
            <img src={delieryImage} />
            <h4 className="font-bold text-2xl text-gray-700">{title}</h4>
            <p className="font-light text-lg text-gray-600">{descritpion}</p>
          </div>
          {children}
        </form>
      </div>
    </div>
  );
}
