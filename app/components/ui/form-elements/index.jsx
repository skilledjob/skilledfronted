import { Input } from "./Input";
import { FormError } from "./error";
import { Label } from "./label";

export const FormElements = {
  Input: props => <Input {...props} />,
  Label: props => <Label {...props} />,
  Error: props => <FormError {...props} />,
};

export default FormElements;
