
export default function Input({ label, name, value, onChangeInput, className }) {
  return (
    <label className={`flex justify-start items-center py-1 w-max select-none ${className}`}>
      <div className="text-gray-600 mr-4">{label}</div>
      <div className="flex items-center w-20 border-2 focus-within:border-primary-700 rounded">
        <span className="text-gray-400 bg-transparent px-2">
          <svg height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </span>
        <input type="number" name={name} value={value} onChange={onChangeInput} className="pr-2 py-2 w-full text-gray-700 bg-white text-sm outline-none focus:outline-none" />
      </div>
    </label>
  );
}