import { Dropdown } from "./Dropdown";
import { DropdownItem } from "./DropdownItem";

/**
 * @name DropdownElement
 * @description This module exports components related to dropdown functionality.
 *
 * @example
 * ```jsx
 * import { DropdownElement } from './index';
 *
 * // Example usage of DropdownElement components
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       {/* Example of using DropdownWrapper *\/}
 *       <DropdownElement.DropdownWrapper
 *         actionElement={<button>Click me</button>}
 *         width="md"
 *       >
 *         {/* Dropdown menu content *\/}
 *         <DropdownElement.DropdownItem type="button" onClick={() => console.log('Item clicked')}>
 *           Option 1
 *         </DropdownElement.DropdownItem>
 *         <DropdownElement.DropdownItem type="link" to="/dashboard">
 *           Dashboard
 *         </DropdownElement.DropdownItem>
 *       </DropdownElement.DropdownWrapper>
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

export const DropdownElement = {
  DropdownWrapper: props => <Dropdown {...props} />,
  DropdownItem: props => <DropdownItem {...props} />,
};
