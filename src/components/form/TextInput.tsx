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
    <div className="mb-2 row">
      <div className="col-4">
        <label htmlFor={name} className={`form-label text-wrap ${(required === true ? "required-input" : "")}`}>{label}</label>
      </div>
      <div className="col-8">
        <input
          id={name}
          name={name} 
          type={type}
          className={`form-control ${isInvalid ? "is-invalid" : ""}`} 
          value={values[name]} 
          onChange={handleChange} 
          onBlur={handleBlur} />
      { isInvalid && <span className="text-danger col-12">{errors[name]}</span> }
      </div>
    </div>
  );
}
