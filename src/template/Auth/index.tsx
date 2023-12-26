import { ReactNode } from 'react';
// import delieryImage from '/delivery.png';

interface LayoutAuthProps {
  title: string;
  descritpion: string;
  children?: ReactNode;
}

export function LayoutAuth({ title, descritpion, children }: LayoutAuthProps) {
  return (
    <div className="relative w-full h-screen bg-blue-500">
      <div className="flex justify-center items-center h-full">
        <div className="max-w-[400px] w-full  mx-auto bg-white p-8 rounded-md">
          <div className="text-center">
            {/* <img src={delieryImage} alt="Delivery" className="h-10"/> */}
            <h4 className="font-bold text-xl text-gray-700">{title}</h4>
            <p className="font-light text-base text-gray-600">{descritpion}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
