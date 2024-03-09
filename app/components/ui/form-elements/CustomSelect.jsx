export default function CustomSelect({
  options,
  value,
  onChange,
  defaultValue = null,
}) {
  return (
    <select
      className="w-full p-3 rounded bg-primary focus:outline-0"
      value={value}
      onChange={onChange}
    >
      {options &&
        options?.length > 0 &&
        options?.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="bg-primary"
            selected={option.value === defaultValue?.value}
          >
            {option.label}
          </option>
        ))}
    </select>
  );
}
