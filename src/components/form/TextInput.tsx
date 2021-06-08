import React from 'react';
import { useFormContext } from '../../contexts/FormContext';

type TextInputProps = {
  name: string;
  /** Text to be shown for the field <label> */
  label: string;
  classes?: string;
  required?: boolean;
};
// Default value for field class attribute 
const DEFAULT_FIELD_CLASS = "form-control mb-2";
/** Renders a controlled \<input type="text"\> */
export function TextInput({ name, label, classes = DEFAULT_FIELD_CLASS, required }: TextInputProps) {
  const { values, handleChange } = useFormContext();

  return (
    <>
      <label htmlFor={name} className={`form-label ${(required === true ? "required-input" : "")}`}>{label}</label>
      <input name={name} type="text" className={classes} required={required} value={values[name]} onChange={handleChange} />
    </>
  );
}
