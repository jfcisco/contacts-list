import { Contact, Gender } from "../types/Contact";
import { Page, PageContext } from "../contexts/PageContext";
import { useContext, useState } from "react";
import { BirthdayInput, ContactNumbersInput, Form, GenderSelect, TextInput } from "../components/form";
import { FormValues } from "../types/FormTypes";

type ContactUpdateProps = {
  updateContact: (c: Contact) => void;
}

export interface UpdateContactFormValues extends FormValues {
  id: string,
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

/** Helper method to turn Date object into an ISO-format date string (i.e. yyyy-MM-dd)
 * for setting date input value 
 */
function formatAsISODate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

/** Form to update an existing contact */
export default function ContactUpdate({ updateContact }: ContactUpdateProps) {
  const { payload: contact, setCurrentPage } = useContext(PageContext);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!contact) return <ContactUpdateErrorMessage />;

  const initialValues: UpdateContactFormValues = {
    id: contact.id.toString(),
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
        onSubmit={(values) => {
          console.log(values); // TODO: add update handler
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