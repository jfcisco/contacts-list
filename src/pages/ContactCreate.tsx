import { useContext, useState } from 'react';
import { PageContext, Pages } from '../contexts/PageContext';
import { Address, Contact } from '../types/Contact';
import { TextInput, BirthdayInput, GenderSelect, ContactNumbersInput, Form } from '../components/form'; 
import "./ContactCreate.css";
import { FormErrors, FormValues } from '../types/FormTypes';

export const isNullOrWhitespace = (value: string | null | undefined): boolean => { 
  if (value == null) return true; // loose compare is intentional
  return (value.trim() === "");
}

export const isValidDate = (value: string) => {
  // TODO: Not yet implemented
  return true;
}

export const isValidGender = (value: string) => {
  // HACK: Type checking at runtime
  return (value === "Male") || (value === "Female") || (value === "Non-binary");
}

export const isValidEmail = (value: string) => {
  // TODO: Not yet implemented
  return true;
}

interface CreateFormValues extends FormValues {
  firstName: string,
  middleName: string,
  lastName: string,
  birthday: string,
  gender?: string,
  address: Address,
  companyName?: string,
  contactNumbers: string[],
  email: string
}

type MapFormFieldsToString<Type> = {
  [Property in keyof Type]?: string;
}

// Map CreateFormValues key to string, and make all optional
type CreateFormErrors = MapFormFieldsToString<CreateFormValues> & FormErrors;

/** Forms a Contact from the given form values, or returns an error object if the contact cannot be parsed.
 * The error object contains the list of validation errors.
 */
function validateContact(values: CreateFormValues): CreateFormErrors {
  const errors: CreateFormErrors = {};
  
  if (isNullOrWhitespace(values.firstName)) {
    errors.firstName = "First name is a required field.";
  }

  if (isNullOrWhitespace(values.middleName)) {
    errors.middleName = "Middle name is a required field.";
  }

  if (isNullOrWhitespace(values.lastName)) {
    errors.lastName = "Last name is a required field.";
  }

  if (!isValidDate(values.birthday)) {
    errors.firstName = "Birthday is a required field.";
  }

  if (values.gender && !isValidGender(values.gender)) {
    errors.gender = "Please select a valid gender option.";
  }

  let addressErrors: string[] = [];
  if (isNullOrWhitespace(values.address.addressLine)) {
    addressErrors.push("Please enter an address line.");
  }

  if (isNullOrWhitespace(values.address.cityProvince)) {
    addressErrors.push("Please enter a city/province.");
  }

  if (isNullOrWhitespace(values.address.country)) {
    addressErrors.push("Please enter a country.");
  }
  
  if (addressErrors.length > 0) {
    errors.address = addressErrors.join(" ");
  }

  if (isNullOrWhitespace(values.email)) {
    errors.email = "Please enter an email address.";
  }
  else if (isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address in the format (name@example.com).";
  }

  if (values.contactNumbers.length < 3) {
    errors.contactNumbers = "Please enter at least three contact numbers";
  }
  
  return errors;
}

type ContactCreateProps = {
  createContact: (contact: Contact) => Promise<Contact>;
}

/** Form to create a contact record */
export default function ContactCreate({ createContact }: ContactCreateProps ) {
  const { setCurrentPage } = useContext(PageContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const initialValues: CreateFormValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    gender: "",
    address: {
      addressLine: "",
      cityProvince: "",
      country: ""
    },
    companyName: "",
    contactNumbers: [],
    email: ""
  };

  function goBack() {
    setCurrentPage(Pages.LIST);
  }

  return (
    <div className="mt-2">
      {/* TODO: Add styling especially required fields */}
      <Form
        initialValues={initialValues}
        validate={validateContact}
        onSubmit={(values) => {
          setIsSubmitting(true);
          // createContact(values)
          //   .then((contact) => {
          //     console.log(`Contact id=${contact.id} added!`);
          //     goBack();
          //   });
        }}>
        <h2>Create Contact</h2>
        <p className="form-text"><span className="text-danger">*</span> indicates required fields.</p>

        <TextInput name="firstName" label="First Name" required />
        <TextInput name="middleName" label="Middle Name" required />
        <TextInput name="lastName" label="Last Name" required />

        <BirthdayInput />

        {/* Assumes gender is a select element */}
        <GenderSelect />

        {/* Address input group*/}
        {/* TODO: Create Address Input Component */}
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

        <TextInput name="companyName" label="Company Name" />

        <div className="d-flex my-2">
          <input disabled={isSubmitting} type="submit" className="btn btn-primary flex-grow-1 me-lg-2" />
          <button className="btn btn-secondary flex-grow-1 ms-lg-2" onClick={() => goBack()}>
            Go Back
          </button>
        </div>
      </Form>
    </div >
  )
}