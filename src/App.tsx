import { ContactCreate, ContactUpdate, ContactsList } from "./pages";
import { Page, PageContextProvider, PagePortal } from './contexts/PageContext';
import useContacts from './hooks/useContacts';

export default function App(): JSX.Element {
  const { contacts, addContact, deleteContact, updateContact } = useContacts();

  return (
    <div className="container-lg mt-2 mt-md-5">
      <h1 className="text-muted mb-4">My Contacts</h1>
      <PageContextProvider initialPage={Page.LIST}>
        <PagePortal showFor={Page.CREATE}>
          <ContactCreate createContact={addContact} />
        </PagePortal>

        <PagePortal showFor={Page.UPDATE}>
            <ContactUpdate updateContact={updateContact} />
        </PagePortal>

        <PagePortal showFor={Page.LIST}>
          <ContactsList contacts={contacts} deleteContact={deleteContact} />
        </PagePortal>
      </PageContextProvider>
    </div>
  );
}