import { useFormContext } from '../../contexts/FormContext';

/** Renders a controlled input component for gender */
export function GenderSelect() {
  const listOfGenders = ["", "Male", "Female", "Non-binary"];
  const { values, handleChange } = useFormContext();

  return (
    <>
      <label htmlFor="gender" className="form-label">Gender</label>
      <select name="gender"
        className="form-select mb-2"
        value={values["gender"]}
        onChange={handleChange}
      >
        {listOfGenders.map(gender => <option>{gender}</option>)}
      </select>
    </>
  );
}
