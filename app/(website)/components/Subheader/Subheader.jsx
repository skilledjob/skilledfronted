/**
 * @param {children} children This will take any value when developer use it. value will insert inside of this component
 * @returns an HTML element
 */

export default function SubHeader({ children, className }) {
  return (
    <h3 className={`text-2xl my-5 font-semibold ${className}`}>{children}</h3>
  );
}
