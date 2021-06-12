import ContactsList from './ContactsList';
import ContactCreate from './ContactCreate';
import { Pages, PageContextProvider, Page } from '../contexts/PageContext';
import useContacts from '../hooks/useContacts';

export default function App(): JSX.Element {
  const { contacts, addContact, deleteContact, updateContact } = useContacts();

  return (
    <div className="container-lg mt-2 mt-md-5">
      <h1 className="text-muted mb-4">My Contacts</h1>
      <PageContextProvider>
        <Page showFor={Pages.CREATE}>
          <ContactCreate createContact={addContact} />
        </Page>

        <Page showFor={Pages.UPDATE}>
          {/* TODO: Create Update Contact form */}
        </Page>

        <Page showFor={Pages.LIST}>
          <ContactsList contacts={contacts} deleteContact={deleteContact} />
        </Page>
      </PageContextProvider>
    </div>
  );
}