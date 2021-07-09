
export default function Checkbox({ label, name, checked, onChangeCheckbox }) {
  return (
    <label className="flex justify-start items-center py-1 w-max select-none">
      <div className="bg-white border-2 rounded border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-700">
        <input name={name} defaultChecked={checked} onChange={onChangeCheckbox} type="checkbox" className="opacity-0 absolute" />
        <svg className={`${checked ? 'block' : 'hidden'} fill-current w-3 h-3 text-green-500 pointer-events-none`} viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
      </div>
      <div className="text-gray-600">{label}</div>
    </label>
  );
}