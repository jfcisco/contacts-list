import React from "react";
import { useFormContext } from "../../contexts/FormContext";
import { FormValues } from "../../types/FormTypes";

/** Custom input to get a list of contact numbers from a user  */
export function ContactNumbersInput() {
  const { setFormValues } = useFormContext<FormValues>();
  const [localValues, setLocalValues] = React.useState<string[]>([]);
  
  React.useEffect(() => {
    setFormValues(values => ({...values, contactNumbers: localValues}));
  }, [localValues, setFormValues]);

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
    setLocalValues(values => values.map((value, i) => i === index ? e.target.value : value));
  }
  
  return (
    <>
      <fieldset className="my-4 row">
        <legend className="col-md-10">Contact Numbers</legend>
        <button className="btn btn-primary col-md-2" onClick={e => addContactNumber(e)}>Add Contact Number</button><br/>
        {
          localValues.length > 0 &&
          localValues.map((number, i) => {
            return (
              <div className="input-group mt-2 mb-1">
                <input
                  className="form-control"
                  type="number"
                  name={`contactNumber[${i}]`}
                  value={number}
                  onChange={(e) => handleLocalChange(e, i)} />
                { i !== 0 && <button className="btn btn-secondary">Set as Primary</button>}
                
                <button className="btn btn-danger" onClick={e=> handleRemove(e, i)}>Remove</button>
              </div>
            )
          })
        }
      </fieldset>
    </>
  );
}