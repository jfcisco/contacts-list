import { useFormContext } from '../../contexts/FormContext';
import { FormValues, FieldProps } from '../../types/FormTypes';

type TextInputProps = {
  /** Text to be shown for the field <label> */
  label: string;
  required?: boolean;
  type?: string;
} & FieldProps;

/** Renders a controlled \<input type="text"\> */
export function TextInput({ name, label, required, type }: TextInputProps) {
  const { values, errors, handleChange, handleBlur, touched } = useFormContext<FormValues>();

  const isInvalid = touched[name] && errors[name];

  return (
    <div className="mb-2">
      <label htmlFor={name} className={`form-label ${(required === true ? "required-input" : "")}`}>{label}</label>
      <input
        id={name}
        name={name} 
        type={type}
        className={`form-control ${isInvalid ? "is-invalid" : ""}`} 
        value={values[name]} 
        onChange={handleChange} 
        onBlur={handleBlur} />
      { isInvalid && <div className="text-danger">{errors[name]}</div> }
    </div>
  );
}
