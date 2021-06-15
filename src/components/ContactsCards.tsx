import { Contact } from "../types/Contact";
import { getAgeFromBirthday, getPrimaryContactNumber } from "../shared/contactFunctions";
import { PageContext, Page } from "../contexts/PageContext";
import { useContext } from "react";

type ContactsCardsProps = {
  contacts: Contact[];
  setContactShown: (c: Contact) => void;
  handleDelete: (c: Contact) => void;
}

/** Renders a mobile-friendly, cards-based list of contacts */
export default function ContactsCards({ contacts, ...props }: ContactsCardsProps) {
  return (
    <>
      {
        contacts.map(contact => <ContactCard key={contact.id} contact={contact} {...props} />)
      }
      {
        contacts.length === 0
        && <p className="text-center text-secondary">You have no contacts yet. Add a contact by clicking on the <span className="text-primary"><strong>Create Contact</strong></span> button above.</p>
      }
    </>
  );
}

type ContactCardProps = {
  contact: Contact;
  setContactShown: (c: Contact) => void;
  handleDelete: (c: Contact) => void;
}

function ContactCard({ contact, setContactShown, handleDelete }: ContactCardProps) {
    const {
      firstName,
      lastName,
      middleName,
      birthday,
      address,
      emailAddress,
      contactNumbers
    } = contact;

    const { setCurrentPage } = useContext(PageContext);

    const fullName = `${lastName}, ${firstName} ${middleName[0]}.`;
    const age = getAgeFromBirthday(birthday);
    const primaryContact = getPrimaryContactNumber(contactNumbers);

    return (
      <div className="card mb-2 bg-light">
        <div className="card-body">
          <h2 className="card-title fs-3">
            <span className="text-secondary">Name: </span>
            {fullName}
          </h2>
          <dl className="row row-cols-2">
            <dt>Age</dt>
            <dd>{age} years old</dd>
            <dt>City/Province</dt>
            <dd>{address.cityProvince}</dd>
            <dt>Email</dt>
            <dd>{emailAddress}</dd>
            <dt>Primary Contact Number</dt>
            <dd>{primaryContact}</dd>
          </dl>
          
          <div className="btn-group btn-group-lg w-100">
            <button
              className="btn btn-outline-primary"
              onClick={() => setContactShown(contact)} >View</button>
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentPage(Page.UPDATE, contact)}>Update</button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(contact)}>Delete</button>
          </div>
        
        </div>
      </div>
    );
}