import { useContext, useState } from 'react';
import { Pages, PageContext } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import ContactView from '../components/ContactViewModal';
import { ContactsTable } from '../components/ContactsTable';

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
      <div className="row mb-4">
        <p className="col-sm-9">Please click on a row to open it.</p>
        <button className="col-2 btn btn-primary" onClick={() => setCurrentPage(Pages.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      { contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)} />}

      <ContactsTable contacts={contacts} setContactShown={setContactShown} handleDelete={handleDelete} />
    </>
  );
}