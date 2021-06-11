import { TextInput } from '.';
import { FieldProps} from '../../types/FormTypes';

/** Renders a controlled \<input type="date"\> to taken in a Birthday */
export function BirthdayInput({ name }: FieldProps) {
  return <TextInput name={name} type="date" required label="Birthday" />;
}
