import { useContext, useState } from 'react';
import { Pages, PageContext } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import ContactView from '../components/ContactViewModal';
import ContactsTable from '../components/ContactsTable';
import ContactsCards from '../components/ContactsCards';

type ContactsListProps = {
  contacts: Contact[];
  deleteContact: (contact: Contact) => {};
}

export default function ContactsList({ contacts, deleteContact }: ContactsListProps): JSX.Element {
  const { setCurrentPage } = useContext(PageContext);
  const [contactShown, setContactShown] = useState<Contact | null>(null);

  const handleDelete = (contact: Contact) => {
    const userConfirmed = window.confirm("Do you want to delete this contact? Click OK to confirm.");

    if (userConfirmed) {
      deleteContact(contact);
    }
  }

  return (
    <>
      <div className="row mb-4 px-4">
        <p className="col-md-9 d-none d-md-inline">Please click on a row to open it.</p>
        <button className="btn btn-primary col-md-3" onClick={() => setCurrentPage(Pages.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      {contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)} />}
      
      {/* Display the data table when screen is large enough */}
      <div className="d-none d-md-block">
        <ContactsTable contacts={contacts} setContactShown={setContactShown} handleDelete={handleDelete} />
      </div>

      {/* Oherwise, display cards that are friendlier to small screens */}
      <div className="d-md-none">
        <ContactsCards contacts={contacts} setContactShown={setContactShown} handleDelete={handleDelete} />
      </div>
    </>
  );
}