import { useFormContext } from '../../contexts/FormContext';
import { FormValues } from '../../types/FormTypes';

/** Renders a controlled \<input type="date"\> to taken in a Birthday */
export function BirthdayInput() {
  const { values, handleChange } = useFormContext<FormValues>();

  return (
    <>
      <label htmlFor="birthday" className="form-label required-input">Birthday</label>
      <input name="birthday" type="date" className="form-control mb-2" value={values["birthday"]} required onChange={handleChange} />
    </>
  );
}
