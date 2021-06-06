import { useContext, useState } from 'react';
import { Pages, PageContext } from '../contexts/PageContext';
import { Contact, getPrimaryContactNumber, getAgeFromBirthday } from '../types/Contact';
import ContactView from './ContactView';

type ContactsListRowProps = {
  contact: Contact;
  onClick: () => void;
}

function ContactsListRow({ contact, onClick }: ContactsListRowProps): JSX.Element {
  const {
    firstName,
    lastName,
    middleName,
    birthday,
    address,
    emailAddress,
    contactNumbers
  } = contact;

  const fullName = `${lastName}, ${firstName} ${middleName[0]}.`;
  const age = getAgeFromBirthday(birthday);
  const primaryContact = getPrimaryContactNumber(contactNumbers);

  return (
    <tr role="button" onClick={onClick}>
      <td>{fullName}</td>
      <td>{age}</td>
      <td>{address.cityProvince}</td>
      <td>{emailAddress}</td>
      <td>{primaryContact}</td>
    </tr>
  )
}

type ContactsListProps = {
  contacts: Contact[]
}

export default function ContactsList({ contacts }: ContactsListProps): JSX.Element {
  const { setCurrentPage } = useContext(PageContext);
  const [contactShown, setContactShown] = useState<Contact | null>(null);
  
  return (
    <>
      <div className="row mb-4">
        <p className="col-9">Please click on a row to open it.</p>
        <button className="col-3 btn btn-primary" onClick={() => setCurrentPage(Pages.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      { contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)}/>}
      
      {/* Contact List */}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City/Province</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number (Primary)</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => <ContactsListRow key={c.id} contact={c} onClick={() => setContactShown(c)}/>)}
          </tbody>
        </table>
      </div>
    </>
  );
}