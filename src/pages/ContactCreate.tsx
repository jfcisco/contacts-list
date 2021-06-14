import { useContext, useState } from 'react';
import { PageContext, Page } from '../contexts/PageContext';
import { Contact, Gender } from '../types/Contact';
import { TextInput, BirthdayInput, GenderSelect, ContactNumbersInput, Form } from '../components/form';
import { FormValues } from '../types/FormTypes';
import { validateContact } from '../shared/validations';

export interface CreateFormValues extends FormValues {
  firstName: string,
  middleName: string,
  lastName: string,
  birthday: string,
  gender?: typeof Gender[keyof typeof Gender],
  "address.addressLine": string,
  "address.cityProvince": string,
  "address.country": string,
  companyName?: string,
  contactNumbers: string[],
  email: string
}

type ContactCreateProps = {
  createContact: (contact: Contact) => Promise<Contact>;
}

/** Form to create a contact record */
export default function ContactCreate({ createContact }: ContactCreateProps) {
  const { setCurrentPage } = useContext(PageContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const initialValues: CreateFormValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    birthday: "",
    "address.addressLine": "",
    "address.cityProvince": "",
    "address.country": "",
    companyName: "",
    contactNumbers: [],
    email: ""
  };

  function goBack() {
    setCurrentPage(Page.LIST);
  }

  return (
    <div className="mt-2">
      <Form
        initialValues={initialValues}
        validate={validateContact}
        onSubmit={(values) => {
          setIsSubmitting(true);
          createContact({
            id: -1, // temporary ID to be replaced with a real one
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            birthday: new Date(values.birthday),
            gender: values.gender ? values.gender : undefined,
            address: {
              addressLine: values["address.addressLine"],
              cityProvince: values["address.cityProvince"],
              country: values["address.country"]
            },
            companyName: values.companyName,
            emailAddress: values.email,
            contactNumbers: values.contactNumbers
          })
            .then((contact) => {
              console.log(`Contact id=${contact.id} added!`);
              goBack();
            });
        }}>
        <h2>Create Contact</h2>
        <p className="form-text"><span className="text-danger">*</span> indicates required fields.</p>

        <TextInput name="firstName" label="First Name" required />
        <TextInput name="middleName" label="Middle Name" required />
        <TextInput name="lastName" label="Last Name" required />
        <BirthdayInput name="birthday" />
        <TextInput type="email" label="Email Address" name="email" required />
        <TextInput name="companyName" label="Company Name" />

        {/* Assumes gender is a select element */}
        <GenderSelect name="gender"/>

        <fieldset name="address" className="my-4">
          <legend>Address</legend>

          <TextInput
            label="Address Line"
            name="address.addressLine"
            required />

          <TextInput
            label="City/Province"
            name="address.cityProvince"
            required />

          <TextInput
            label="Country"
            name="address.country"
            required />
        </fieldset>

        <ContactNumbersInput name="contactNumbers" />
        
        <div className="d-flex my-4">
          <input disabled={isSubmitting} type="submit" className="btn btn-primary flex-grow-1 me-lg-2" />
          <button type="button" className="btn btn-secondary flex-grow-1 ms-lg-2" onClick={() => goBack()}>
            Go Back
          </button>
        </div>
      </Form>
    </div >
  )
}