export default function textInput({
  label,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col w-full items-start">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border rounded w-full outline-none"
      />
    </div>
  );
}
