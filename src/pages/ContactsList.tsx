import { useContext, useState } from 'react';
import { Page, PageContext } from '../contexts/PageContext';
import { Contact } from '../types/Contact';
import ContactView from '../components/ContactViewModal';
import ContactsTable from '../components/ContactsTable';
import ContactsCards from '../components/ContactsCards';
import { Form, TextInput } from '../components/form';

type ContactsListProps = {
  contacts: Contact[];
  deleteContact: (contact: Contact) => void;
}

const contactMatchesQuery = (contact: Contact, query: ContactsSearchQuery) => {
  const contactNames = [contact.firstName, contact.middleName, contact.lastName]
  
  // As soon as the contact is found not to match the query, return false;
  if (query.name && !contactNames.some(name => name.toLowerCase().includes(query.name.toLowerCase()))) {
    return false;
  }

  if (query.email && !(contact.emailAddress.toLowerCase().includes(query.email.toLowerCase()))) {
    return false;
  }

  if (query.cityProvince && !(contact.address.cityProvince.toLowerCase().includes(query.cityProvince.toLowerCase()))) {
    return false;
  }
    
  return true;
}


export default function ContactsList({ contacts, deleteContact }: ContactsListProps): JSX.Element {
  const { setCurrentPage } = useContext(PageContext);
  const [contactShown, setContactShown] = useState<Contact | null>(null);
  const [searchQuery, setSearchQuery] = useState<ContactsSearchQuery>({ name: '', email: '', cityProvince: ''});

  const handleDelete = (contact: Contact) => {
    const userConfirmed = window.confirm("Do you want to delete this contact? Click OK to confirm.");

    if (userConfirmed) {
      deleteContact(contact);
    }
  }

  const listProps = {
    contacts: contacts.filter(c => contactMatchesQuery(c, searchQuery)),
    setContactShown,
    handleDelete
  };

  return (
    <>
      <div className="row mb-4 px-4">
        <p className="col-md-9 d-none d-md-inline">Please click on a row to view the contact.</p>
        <button className="btn btn-primary col-md-3" onClick={() => setCurrentPage(Page.CREATE)}>Create Contact</button>
      </div>
      {/* Contact Modal */}
      {contactShown && <ContactView contact={contactShown} onHide={() => setContactShown(null)} />}

      <ContactsFilter onFilter={(query) => setSearchQuery(query)}/>

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

interface ContactsSearchQuery {
  name: string,
  email: string,
  cityProvince: string
}

type ContactsFilterProps = {
  onFilter: (q: ContactsSearchQuery) => void;
}

// TODO: Refactor as a separate component
function ContactsFilter({ onFilter }: ContactsFilterProps) {
  const initialQuery: ContactsSearchQuery = {
    name: '',
    email: '',
    cityProvince: ''
  };

  return (
    <Form
      initialValues={initialQuery}
      onSubmit={values => {
        onFilter({
          name: values.name.trim(),
          email: values.email.trim(),
          cityProvince: values.cityProvince.trim()
        });
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