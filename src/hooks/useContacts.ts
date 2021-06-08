import { useState } from 'react';
import { sampleContacts } from '../sampleContacts';
import { Contact } from '../types/Contact';

// Assumes that contacts are synchronous
// TODO: Simulate a backend that is asynchronous for CRUD contacts
export default function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>(sampleContacts);

  function addContact(newContact: Contact) {
    setContacts(contacts => contacts.concat(newContact));
  }

  // Using const assertion for custom hook: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#custom-hooks
  return [contacts, addContact] as const;
}
