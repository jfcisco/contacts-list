import { Contact, Gender } from "../types/Contact";
import { Page, PageContext } from "../contexts/PageContext";
import { useContext, useState } from "react";
import { BirthdayInput, ContactNumbersInput, Form, GenderSelect, TextInput } from "../components/form";
import { FormValues } from "../types/FormTypes";
import { validateContact } from "../shared/validations";
import { formatAsISODate, parseIsoDateString } from "../shared/contactFunctions";

type ContactUpdateProps = {
  updateContact: (c: Contact) => Promise<Contact>;
}

export interface UpdateContactFormValues extends FormValues {
  id: number,
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

/** Form to update an existing contact */
export default function ContactUpdate({ updateContact }: ContactUpdateProps) {
  const { payload: contact, setCurrentPage } = useContext(PageContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!contact) return <ContactUpdateErrorMessage />;

  const initialValues: UpdateContactFormValues = {
    id: contact.id,
    firstName: contact.firstName,
    middleName: contact.middleName,
    lastName: contact.lastName,
    birthday: formatAsISODate(contact.birthday),
    gender: contact.gender,
    "address.addressLine": contact.address.addressLine,
    "address.cityProvince": contact.address.cityProvince,
    "address.country": contact.address.country,
    companyName: contact.companyName,
    contactNumbers: contact.contactNumbers,
    email: contact.emailAddress,
  }

  return (
    <div>
      <Form
        initialValues={initialValues}
        validate={validateContact}
        onSubmit={(values) => {
          setIsSubmitting(true);
          // Make Contact from contact form values
          const updatedContact: Contact = {
            id: values.id,
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            birthday: parseIsoDateString(values.birthday),
            gender: values.gender ? values.gender : undefined,
            address: {
              addressLine: values["address.addressLine"],
              cityProvince: values["address.cityProvince"],
              country: values["address.country"]
            },
            companyName: values.companyName,
            emailAddress: values.email,
            contactNumbers: values.contactNumbers
          }
          
          updateContact(updatedContact)
            .then(contact => {
              setCurrentPage(Page.LIST);
              console.log("Updated contact with id: ", contact.id);
            })
            .catch(err => {
              console.error("Error occured! ", err); // TODO: Replace with appropriate logger
              setIsSubmitting(false);
            });
        }}
      >
        <h2>Update a Contact</h2>
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

        <ContactNumbersInput name="contactNumbers" initialValue={initialValues.contactNumbers} />
        
        <div className="d-flex my-4">
          <input disabled={isSubmitting} type="submit" className="btn btn-primary flex-grow-1 me-lg-2" />
          <button type="button" className="btn btn-secondary flex-grow-1 ms-lg-2" onClick={() => setCurrentPage(Page.LIST)}>
            Go Back
          </button>
        </div>
      </Form>
    </div>
  );
}

/** Displays an error message in case ContactUpdate was rendered without a passed in Contact. */
function ContactUpdateErrorMessage() {
  const { setCurrentPage } = useContext(PageContext);
  return (
    <div className="text-center">
      <p className="text-danger">Error while updating contact! No contact was selected for updating.</p>
      <button onClick={() => setCurrentPage(Page.LIST)}>Go back</button>
    </div>
  );
}