export default function DateInput({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col w-full items-start">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 mt-[px] border rounded w-full outline-none text-[#999]"
      />
    </div>
  );
}
