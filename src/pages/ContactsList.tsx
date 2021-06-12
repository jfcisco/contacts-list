import { useContext, useState } from 'react';
import { Pages, PageContext } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import ContactView from '../components/ContactViewModal';
import ContactsTable from '../components/ContactsTable';
import ContactsCards from '../components/ContactsCards';
import { Form, TextInput } from '../components/form';

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

  const listProps = { contacts, setContactShown, handleDelete };

  return (
    <>
      <div className="row mb-4 px-4">
        <p className="col-md-9 d-none d-md-inline">Please click on a row to view the contact.</p>
        <button className="btn btn-primary col-md-3" onClick={() => setCurrentPage(Pages.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      {contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)} />}

      <ContactsFilter />

      {/* Display the data table when screen is large enough */}
      <div className="d-none d-md-block">
        <ContactsTable {...listProps} />
      </div>

      {/* Oherwise, display cards that are friendlier to small screens */}
      <div className="d-md-none">
        <ContactsCards {...listProps} />
      </div>
    </>
  );
}

interface ContactsFilterValues {
  name: string,
  email: string,
  cityProvince: string
}

function ContactsFilter() {
  const initialQuery: ContactsFilterValues = {
    name: '',
    email: '',
    cityProvince: ''
  };

  return (
    <Form
      initialValues={initialQuery}
      onSubmit={(values) => {
        console.log("filter values:", values);
      }}
    >
      <p className="form-text">Search Contact</p>
      <div className="row mb-4">
        <div className="col-sm-6 col-lg-3 justify-content-end">
          <TextInput name="name" label="Name" />
        </div>
        <div className="col-sm-6 col-lg-3">
          <TextInput name="email" label="Email" />
        </div>
        <div className="col-sm-6 col-lg-4">
          <TextInput name="cityProvince" label="City/Province" />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-outline-dark w-100">Search</button>
        </div>
      </div>
    </Form>
  );
}