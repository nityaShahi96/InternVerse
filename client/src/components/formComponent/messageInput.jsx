export default function messageInput({
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
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border rounded w-full outline-none h-32"
      />
    </div>
  );
}
