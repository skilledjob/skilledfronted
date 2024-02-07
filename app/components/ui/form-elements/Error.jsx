"use client";

/**
 * @name FormError
 * @description This component is used to display error messages within a form.
 * It renders the provided error message as its children.
 *
 * @param {string} children - The error message to be displayed.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the error message.
 *
 * @example
 * ```jsx
 * <FormError>Error message goes here</FormError>
 * ```
 */

export const FormError = ({ children }) => {
  return (
    <div className="mt-1">
      <p className="text-[12px] text-[#b43c3c]">{children}</p>
    </div>
  );
};
