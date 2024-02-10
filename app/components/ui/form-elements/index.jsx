import { Input } from "./Input";
import { SelectInput } from "./Select";
import { FormError } from "./error";
import { Label } from "./label";

export const FormElements = {
  Input: props => <Input {...props} />,
  Label: props => <Label {...props} />,
  Error: props => <FormError {...props} />,
  Select: props => <SelectInput {...props} />,
};

export default FormElements;
