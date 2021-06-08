import { sampleContacts } from '../sampleContacts';
import { Contact } from '../types/Contact';

const DELAY_TIME = 700;
const delay = () => new Promise((resolve) => setTimeout(resolve, DELAY_TIME));

let contacts = sampleContacts;

// Assumes that contacts are synchronous
// TODO: Simulate a backend that is asynchronous for CRUD contacts
export default function useContactsDelay() {
  function isExistingContact(testContact: Contact) {
    return contacts.find(c => c.id === testContact.id) !== undefined;
  }

  async function addContact(newContact: Contact) {
    await delay();
    contacts = [newContact, ...contacts];
    return newContact;
  }

  async function getContacts() {
    await delay();
    return contacts;
  }

  async function updateContact(updatedContact: Contact) {
    await delay();
    if (!isExistingContact(updatedContact)) throw new Error(`${updatedContact} is not an existing contact!`);

    contacts = contacts.map(contact => (contact.id === updatedContact.id) ? updatedContact : contact);
    return updatedContact;
  }

  async function deleteContact(contactToDelete: Contact) {
    await delay();
    if (!isExistingContact(contactToDelete)) throw new Error(`${contactToDelete} is not an existing contact!`);

    contacts = contacts.filter(c => c.id !== contactToDelete.id);
  }

  // Using const assertion for custom hook: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#custom-hooks
  return { contacts, addContact, getContacts, updateContact };
}
