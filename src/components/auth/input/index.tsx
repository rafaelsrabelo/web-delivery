interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Correção do tipo de evento
}

export function Input({ label, type, value, onChange }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        className="bg-white h-12 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full p-2.5"
        placeholder={`${label}`}
        onChange={onChange}
      />
    </div>
  );
}
