import { useEffect, useState } from 'react';
import { sampleContacts } from '../sampleContacts';
import { Contact } from '../types/Contact';

const DELAY_TIME = 700;
const delay = () => new Promise((resolve) => setTimeout(resolve, DELAY_TIME));

/** Custom hook for data operations. Simulates a backend that is asynchronous for CRUD contacts */ 
export function useContactsDelay() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(sampleContacts);
  }, []);

  function isExistingContact(testContact: Contact) {
    return contacts.find(c => c.id === testContact.id) !== undefined;
  }

  /** Adds a contact to the list of contacts */
  async function createContact(newContact: Contact) {
    const oldContacts = [...contacts];
    setContacts(contacts => [newContact, ...contacts]);
    
    try {
      await delay();
    } catch (e) {
      console.error(`An error occured! ${e}`) // Enhancement: replace with appropriate logger
      setContacts(oldContacts); // rollback
    }

    return newContact;
  }

  /** Updates an existing contact */
  async function updateContact(updatedContact: Contact) {
    const oldContacts = [...contacts];
    setContacts(contacts => contacts.map(contact => (contact.id === updatedContact.id) ? updatedContact : contact));
    
    try {
      await delay();
      if (!isExistingContact(updatedContact)) throw new Error(`${updatedContact} is not an existing contact!`);
    } catch (e) {
      console.error(`An error occured! ${e}`) // Enhancement: replace with appropriate logger
      setContacts(oldContacts);
    }
    
    return updatedContact;
  }

  /** Deletes a contact that is placed in */
  async function deleteContact(contactToDelete: Contact) {
    const oldContacts = [...contacts];
    setContacts(contacts => contacts.filter(c => c.id !== contactToDelete.id));

    try {
      await delay();
      if (!isExistingContact(contactToDelete)) throw new Error(`${contactToDelete} is not an existing contact!`);
    } catch (e) {
      console.error(`An error occured! ${e}`) // replace with appropriate logger
      setContacts(oldContacts);
    }
  }

  return { contacts, addContact: createContact, updateContact, deleteContact };
}
