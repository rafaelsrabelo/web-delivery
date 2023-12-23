interface ButtonProps {
  onClick: () => void;
  label: string;
}

export function Button({ onClick, label }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 w-full h-12 font-bold text-white p-2.5 rounded-lg mt-4 transition duration-300 hover:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
