import { useEffect, useRef } from 'react';
import { sampleContacts } from '../sampleContacts';
import ContactsList from './ContactsList';
import ContactView from './ContactView';
import Modal from 'bootstrap/js/dist/modal';

export default function App(): JSX.Element {
  const viewModalRef = useRef<Modal>();

  const showModal = () => {
    if (viewModalRef.current) viewModalRef.current.show();
  }

  return (
    <div className="container mt-2">
      <h1>My Contacts</h1>
      <p>Please click on a row to open it.</p>
      <ContactView modalRef={viewModalRef} contact={sampleContacts[0]} />
      <button onClick={() => showModal()}>Show Modal</button>
      <ContactsList contacts={sampleContacts} />
    </div>
  );
}