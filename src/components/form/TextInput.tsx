import { useFormContext } from '../../contexts/FormContext';
import { FormValues } from '../../types/FormTypes';

type TextInputProps = {
  name: string;
  /** Text to be shown for the field <label> */
  label: string;
  classes?: string;
  required?: boolean;
  type?: string;
};

/** Renders a controlled \<input type="text"\> */
export function TextInput({ name, label, required, type }: TextInputProps) {
  const { values, errors, handleChange, handleBlur, touched } = useFormContext<FormValues>();

  const isInvalid = touched[name] && errors[name];

  return (
    <>
      <label htmlFor={name} className={`form-label ${(required === true ? "required-input" : "")}`}>{label}</label>
      <input 
        name={name} 
        type={type}
        className={`form-control ${isInvalid ? "is-invalid" : ""}`} 
        value={values[name]} 
        onChange={handleChange} 
        onBlur={handleBlur} />
      { touched[name] && errors[name] && <div className="text-danger mb-2">{errors[name]}</div> }
    </>
  );
}
