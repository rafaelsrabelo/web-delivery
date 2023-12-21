interface InputProps {
  label: string;
  type: string;
  onChange: (value: string) => void;
}

export function Input({ label, type, onChange }: InputProps) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="bg-white h-12 border border-gray-300 text-gray-700 text-sm rounded-lg  block w-full p-2.5"
        placeholder={`Enter ${label}`}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
