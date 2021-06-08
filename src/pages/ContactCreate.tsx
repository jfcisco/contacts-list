import { useContext, useState } from 'react';
import { PageContext, Pages } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import useContactsDelay from '../hooks/useContacts';
import { TextInput, BirthdayInput, GenderSelect, ContactNumbersInput, Form } from '../components/form'; 
import "./ContactCreate.css";

type ContactFormValues = {
  firstname: string;
  middlename: string;
  lastname: string;
  birthday: string;
  gender: string;
  companyname: string;
}

/** Form to create a contact record */
export default function ContactCreate() {
  const { setCurrentPage } = useContext(PageContext);
  const { addContact } = useContactsDelay();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    birthday: "",
    gender: "",
    companyname: ""
  };

  // HACK: There's probs a better way to map values to an object
  function parseForm(values: ContactFormValues) {
    // Map form values to Contact type
    const newContact: Contact = {
      id: Math.floor(Math.random() * 1000 + 2),
      firstName: values.firstname,
      middleName: values.middlename,
      lastName: values.lastname,
      birthday: new Date(1998, 7, 4),
      address: { addressLine: "a", cityProvince: "b", country: "c" },
      emailAddress: "test@example.com",
      contactNumbers: ["1", "2"]
    }

    return newContact;
  }

  function goBack() {
    setCurrentPage(Pages.LIST);
  }

  return (
    <div className="mt-2">
      {/* TODO: Add styling especially required fields */}
      <Form
        initialValues={initialValues}
        onSubmit={(values) => {
          setIsSubmitting(true);
          addContact(parseForm(values as ContactFormValues))
            .then((contact) => {
              console.log(`Contact id=${contact.id} added!`);
              goBack();
            });
        }}>
        <h2>Create Contact</h2>
        <p className="form-text"><span className="text-danger">*</span> indicates required fields.</p>

        <TextInput name="firstname" label="First Name" required />
        <TextInput name="middlename" label="Middle Name" required />
        <TextInput name="lastname" label="Last Name" required />

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

        <TextInput name="companyname" label="Company Name" />

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