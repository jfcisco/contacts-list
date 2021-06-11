import { useFormContext } from '../../contexts/FormContext';
import { Gender } from '../../types/Contact';
import { FormValues, FieldProps } from '../../types/FormTypes';

/** Renders a controlled input component for gender */
export function GenderSelect({ name }: FieldProps) {
  const listOfGenders: string[] = ["", ...Object.values(Gender)];
  const { values, handleChange, handleBlur, touched, errors } = useFormContext<FormValues>();

  const isInvalid = touched[name] && errors[name];

  return (
    <>
      <label htmlFor={name} className="form-label">Gender</label>
      <select name={name}
        className={`form-select mb-2 ${isInvalid ? "is-invalid" : ""}`}
        value={values["gender"]}
        onChange={handleChange}
        onBlur={handleBlur}>
        {listOfGenders.map(gender => <option key={gender}>{gender}</option>)}
      </select>
      { isInvalid && <div className="text-danger mb-2">{errors[name]}</div> }
    </>
  );
}