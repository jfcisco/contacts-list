import React, { FormEventHandler, useContext, useState } from 'react';
import { PageContext, Pages } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import "./ContactCreate.css";

type FormInput = HTMLInputElement | HTMLSelectElement;

type TextInputProps = {
  name: string;
  /** Text to be shown for the field <label> */
  label: string;
  classes?: string;
  required?: boolean;
}

// Default value for field class attribute 
const DEFAULT_FIELD_CLASS = "form-control mb-2";

/** Renders a controlled \<input type="text"\> */
function TextInput({ name, label, classes = DEFAULT_FIELD_CLASS, required }: TextInputProps) {
  const { values, handleChange } = useContext(FormContext);

  return (
    <>
      <label htmlFor={name} className={`form-label ${(required === true ? "required-input" : "")}`}>{label}</label>
      <input name={name} type="text" className={classes} required={required} value={values[name]} onChange={handleChange} />
    </>
  )
}

/** Renders a controlled \<input type="date"\> to taken in a Birthday */
function BirthdayInput() {
  const { values, handleChange } = useContext(FormContext);

  return (
    <>
      <label htmlFor="birthday" className="form-label required-input">Birthday</label>
      <input name="birthday" type="date" className="form-control mb-2" value={values["birthday"]} required onChange={handleChange} />
    </>
  );
}

/** Renders a controlled input component for gender */
function GenderSelect() {
  const listOfGenders = ["", "Male", "Female", "Non-binary"];
  const { values, handleChange } = useContext(FormContext);

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


type FormContextType = {
  values: {
    [field: string]: string;
  };
  handleChange: React.FormEventHandler<FormInput>
}
// TODO: Extract FormContext to another file 
// TODO: Make this type-safe https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context
const FormContext = React.createContext<FormContextType>(undefined!);

/** Form to create a contact record */
export default function ContactCreate() {
  const { setCurrentPage } = useContext(PageContext);
  const defaultValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    companyname: ""
  }

  // React magic for managing form state
  // Heavily inspired by Formik's APIs: http://formik.org/ 
  const [formValues, setFormValues] = useState(defaultValues);

  function handleChange(e: React.SyntheticEvent<FormInput>) {
    const { name, value } = e.currentTarget;

    setFormValues(state => ({
      ...state,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="mt-2">
      <pre><span>Debugging only, PLEASE REMOVE</span>{JSON.stringify(formValues)}</pre>
      {/* TODO: Add styling especially required fields */}
      <FormContext.Provider value={{ values: formValues, handleChange }}>
        <form className="container" onSubmit={(e) => handleSubmit(e)}>
          <h2>Create Contact</h2>
          <p className="form-text"><span className="text-danger">*</span> indicates required fields.</p>

          <TextInput name="firstname" label="First Name" required />
          <TextInput name="middlename" label="Middle Name" required />
          <TextInput name="lastname" label="Last Name" required />

          <BirthdayInput />

          {/* Assumes gender is a select element */}
          <GenderSelect />

          {/* Address input group*/}
          <fieldset name="address" className="my-4">
            <legend>Address</legend>
            <label htmlFor="addressline" className="form-label">Address Line</label>
            <input name="addressline" type="text" className="form-control mb-2" required />
            <label htmlFor="cityprovince">City/Province</label>
            <input name="cityprovince" type="text" className="form-control mb-2" required />
            <label htmlFor="cityprovince">Country</label>
            <input name="country" type="text" className="form-control mb-2" required />
          </fieldset>

          {/* What's the input type for email address? */}
          <label htmlFor="email" className="form-label">Email Address</label>
          <input name="email" type="email" className="form-control mb-2" required />

          {/* TODO: Create contact numbers input component */}
          <ContactNumbersInput value={[]} onChange={() => { }} />

          <TextInput name="companyname" label="Company Name" />

          <div className="d-flex my-2">
            <input type="submit" className="btn btn-primary flex-grow-1 me-lg-2" />
            <button className="btn btn-secondary flex-grow-1 ms-lg-2" onClick={() => setCurrentPage(Pages.LIST)}>
              Go Back
          </button>
          </div>
        </form>
      </FormContext.Provider>
    </div>
  )
}

type ContactNumbersInputProps = {
  value: string[];
  onChange: () => void;
}

/** Custom input to get a list of contact numbers from a user  */
function ContactNumbersInput({ value, onChange }: ContactNumbersInputProps): JSX.Element {
  return (<p className="mb-2">Contact Numbers: Exciting feature coming soon!</p>);
}