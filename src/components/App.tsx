import { sampleContacts } from '../sampleContacts';
import ContactsList from './ContactsList';
import ContactCreate from './ContactCreate';
import { Pages, PageContextProvider, Page } from '../contexts/PageContext';

export default function App(): JSX.Element {
  return (
    <div className="container mt-2">
      <h1>My Contacts</h1>
      <PageContextProvider>
        <Page showFor={Pages.CREATE}>
          <ContactCreate />
        </Page>

        <Page showFor={Pages.LIST}>
          <ContactsList contacts={sampleContacts} />
        </Page>
      </PageContextProvider>
    </div>
  );
}