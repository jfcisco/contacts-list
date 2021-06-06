import { useRef } from 'react';
import { sampleContacts } from '../sampleContacts';
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import ContactCreate from './ContactCreate';
import Modal from 'bootstrap/js/dist/modal';
import { Pages, PageContextProvider, Page } from '../contexts/PageContext';

export default function App(): JSX.Element {
  const viewModalRef = useRef<Modal>();

  const showModal = () => {
    if (viewModalRef.current) viewModalRef.current.show();
  }
  return (
    <PageContextProvider>
      <div className="container mt-2">
        <h1>My Contacts</h1>
        <Page showFor={Pages.CREATE}>
          <ContactCreate />
        </Page>

        <Page showFor={Pages.LIST}>
          <p>Please click on a row to open it.</p>
          <ContactView modalRef={viewModalRef} contact={sampleContacts[0]} />
          <ContactsList contacts={sampleContacts} />
        </Page>
      </div>
    </PageContextProvider>
  );
}