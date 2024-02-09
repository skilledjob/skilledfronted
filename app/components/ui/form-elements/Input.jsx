/**
 * @name Input
 * @description This component represents a customizable input field.
 * It accepts various props to configure its appearance and behavior.
 *
 * @param {string} type - The type of input field (e.g., "text", "number").
 * @param {string} name - The name attribute of the input field.
 * @param {string} placeholder - The placeholder text displayed in the input field.
 * @param {any} value - The value of the input field.
 * @param {function} onChange - The event handler function for input change.
 * @param {string} width - The width of the input field. Options: "full", "half", "third", "quarter", "auto".
 * @param {string} fontSizeVariant - The variant of font size for the input field.
 * @param {boolean} disabled - Indicates whether the input field is disabled.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the input field.
 *
 * @example
 * ```jsx
 * <Input
 *   type="text"
 *   name="username"
 *   placeholder="Enter your username"
 *   value={username}
 *   onChange={(e) => setUsername(e.target.value)}
 *   width="full"
 *   fontSizeVariant="medium"
 *   disabled={false}
 * />
 * ```
 */

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  width = "full",
  fontSizeVariant,
  disabled = false,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={`
        border border-gray-800 py-3.5 px-5 rounded bg-gray-900 text-slate-50
          ${
            width === "full"
              ? "w-full"
              : width === "half"
                ? "w-1/2"
                : width === "third"
                  ? "w-1/3"
                  : width === "quarter"
                    ? "w-1/4"
                    : width === "auto"
                      ? "w-auto"
                      : ""
          }
        focus:outline-none
        `}
        disabled={disabled}
      />
    </div>
  );
};
