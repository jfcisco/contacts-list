import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { setPrimaryContactNumber } from "../../shared/contactFunctions";
import { FormValues, FieldProps } from "../../types/FormTypes";

type ContactNumbersInputProps = {
  initialValue?: string[];
} & FieldProps

/** Custom input to get a list of contact numbers from a user  */
export function ContactNumbersInput({ name, initialValue }: ContactNumbersInputProps) {
  const { setFormValues, touched, errors, handleBlur  } = useFormContext<FormValues>();
  const [localValues, setLocalValues] = React.useState<string[]>([]);
  const isInvalid = touched[name] && errors[name];

  // Set initial value upon component mount if there is one 
  React.useEffect(() => {
    if (initialValue) setLocalValues(initialValue);
  }, [initialValue, setLocalValues]);

  // Record  changes in local state in the state of the FormContext
  React.useEffect(() => {
    // TODO: Maybe there's a way to eliminate the need for a local state?
    setFormValues(values => ({ ...values, [name]: localValues }));
  }, [localValues, name, setFormValues]);

  const addContactNumber = () => {
    setLocalValues(values => [...values, ""]);
  }

  const handleRemove = (index: number) => {
    setLocalValues(values => values.filter((_, i) => i !== index));
  }

  const handleLocalChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;

    // Test against the pattern stated in the input
    if (!new RegExp(e.target.pattern).test(newValue)) return;
    setLocalValues(values => values.map((value, i) => i === index ? e.target.value : value));
  }

  const handleSetPrimaryNumber = (index: number) => {
    setLocalValues(values => setPrimaryContactNumber(values, values[index]));
  }

  return (
    <fieldset className="my-4 row">
      <legend className="col-md-10 required-input">Contact Numbers</legend>
      <button type="button" className="btn btn-primary col-md-2" onClick={() => addContactNumber()}>Add Contact Number</button><br />
      {
        localValues.length > 0 &&
        localValues.map((number, i) => {
          return (
            <div key={i} className="input-group mt-2 mb-1">
              { i === 0 && <span className="input-group-text">Primary Contact</span> }
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
              {
                i !== 0 && <button type="button" className="btn btn-secondary" onClick={() => handleSetPrimaryNumber(i)}>Set as Primary Contact</button>
              }

              <button type="button" className="btn btn-danger" onClick={() => handleRemove(i)}>Remove</button>
            </div>
          )
        })
      }
      { isInvalid && <div className="text-danger">{errors[name]}</div> }
    </fieldset>
  );
}