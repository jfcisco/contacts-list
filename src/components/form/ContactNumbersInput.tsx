import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { FormValues, FieldProps } from "../../types/FormTypes";

/** Custom input to get a list of contact numbers from a user  */
export function ContactNumbersInput({ name }: FieldProps) {
  const { setFormValues, touched, errors, handleBlur  } = useFormContext<FormValues>();
  const [localValues, setLocalValues] = React.useState<string[]>([]);
  const isInvalid = touched[name] && errors[name];

  React.useEffect(() => {
    setFormValues(values => ({ ...values, [name]: localValues }));
  }, [localValues, name, setFormValues]);

  const addContactNumber = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setLocalValues(values => [...values, ""]);
  }

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, index: number) => {
    e.preventDefault();
    setLocalValues(values => values.filter((_, i) => i !== index));
  }

  const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const newValue = e.target.value;

    // Test against the pattern stated in the input
    if (!new RegExp(e.target.pattern).test(newValue)) return;
    setLocalValues(values => values.map((value, i) => i === index ? e.target.value : value));
  }

  return (
    <fieldset className="my-4 row">
      <legend className="col-md-10 required-input">Contact Numbers</legend>
      <button className="btn btn-primary col-md-2" onClick={e => addContactNumber(e)}>Add Contact Number</button><br />
      {
        localValues.length > 0 &&
        localValues.map((number, i) => {
          return (
            <div key={i} className="input-group mt-2 mb-1">
              
            {/* Trying this one out: https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/ */}
              <input
                className={`form-control ${isInvalid ? "is-invalid" : ""}`}
                type="text"
                pattern="^[0-9]*$"
                inputMode="numeric"
                name={`${name}[${i}]`}
                value={number}
                onChange={(e) => handleLocalChange(e, i)}
                onBlur={handleBlur}
              />
              { i !== 0 && <button className="btn btn-secondary">Set as Primary</button>}

              <button className="btn btn-danger" onClick={e => handleRemove(e, i)}>Remove</button>
            </div>
          )
        })
      }
      { isInvalid && <div className="text-danger">{errors[name]}</div> }
    </fieldset>
  );
}