export default function SelectInput({ label, name, options, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-2 outline-none border rounded"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
