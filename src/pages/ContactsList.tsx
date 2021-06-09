import { useContext, useState } from 'react';
import { Pages, PageContext } from '../contexts/PageContext';
import { Contact, getPrimaryContactNumber, getAgeFromBirthday } from '../types/Contact';
import ContactView from '../components/ContactViewModal';

type ContactsListRowProps = {
  contact: Contact;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

function ContactsListRow({ contact, onView: onView, onDelete }: ContactsListRowProps): JSX.Element {
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
    <tr role="button" onClick={onView}>
      <td>{fullName}</td>
      <td>{age}</td>
      <td>{address.cityProvince}</td>
      <td>{emailAddress}</td>
      <td>{primaryContact}</td>
      <td><button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); onDelete()}}>Delete</button></td>
    </tr>
  )
}

type ContactsListProps = {
  contacts: Contact[];
  deleteContact: (contact: Contact) => {};
}

export default function ContactsList({contacts, deleteContact}: ContactsListProps): JSX.Element {
  const { setCurrentPage } = useContext(PageContext);
  const [contactShown, setContactShown] = useState<Contact | null>(null);

  const handleDelete = (contact: Contact) => {
    const userConfirmed = window.confirm(`Are you sure you want to delete ${contact.firstName} ${contact.lastName}?`);
    
    if (userConfirmed) {
      deleteContact(contact);
    }
  }

  return (
    <>
      <div className="row mb-4">
        <p className="col-sm-9">Please click on a row to open it.</p>
        <button className="col-2 btn btn-primary" onClick={() => setCurrentPage(Pages.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      { contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)}/>}
      
      {/* Contact List */}
      <div className="table-responsive">
        <table className="table table-hover">
          {/* Weird bug on Edge: Header bottom border disappears when hovering over first row */}
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">City/Province</th>
              <th scope="col">Email</th>
              <th scope="col">Contact Number (Primary)</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            { 
              contacts 
              ? contacts.map((c) => <ContactsListRow 
                                      key={c.id} 
                                      contact={c} 
                                      onView={() => setContactShown(c)}
                                      onEdit={() => {}}
                                      onDelete={() => handleDelete(c)} />) 
              : "Loading..."
            }
          </tbody>
        </table>

        { contacts?.length === 0 && <p className="text-center text-secondary">You have no contacts yet. Add a contact by clicking on the <span className="text-primary"><strong>Create Contact</strong></span> button above.</p>}
      </div>
    </>
  );
}