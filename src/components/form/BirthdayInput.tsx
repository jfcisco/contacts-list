import React from 'react';
import { useFormContext } from '../../contexts/FormContext';

/** Renders a controlled \<input type="date"\> to taken in a Birthday */
export function BirthdayInput() {
  const { values, handleChange } = useFormContext();

  return (
    <>
      <label htmlFor="birthday" className="form-label required-input">Birthday</label>
      <input name="birthday" type="date" className="form-control mb-2" value={values["birthday"]} required onChange={handleChange} />
    </>
  );
}
