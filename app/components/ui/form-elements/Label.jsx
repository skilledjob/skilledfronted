"use client";

/**
 * @name Label
 * @description This component represents a label for a form field.
 * It can optionally display an asterisk (*) indicating that the field is required.
 *
 * @param {boolean} withAsterisk - Indicates whether to display an asterisk (*) after the label.
 * @param {string} children - The content of the label.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the label.
 *
 * @example
 * ```jsx
 * <Label withAsterisk={true}>Username</Label>
 * ```
 */

export const Label = ({ children, withAsterisk = false }) => {
  return (
    <label
      className={`block mb-1 text-[14px] font-light text-slate-200
    `}
    >
      {children}
      {withAsterisk && (
        <span className="text-red-600" title="Required">
          {" "}
          *
        </span>
      )}
    </label>
  );
};
