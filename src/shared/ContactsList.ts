type Gender = "Male" | "Female" | "Non-Binary";

// Assumption: Parts of address is free-text
type Address = {
  addressLine: string;
  cityProvince: string;
  country: string;
}

export type Contact = {
  id: number; // Sequence number of contact
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: Date;
  gender?: Gender;
  address: Address;
  emailAddress: string;
  contactNumbers: string[];
  companyName?: string;
}

/** 
 * Returns the list of contacts with the given contact as the primary contact.
*/
export function setPrimaryContactNumber(contacts: string[], contact: string): string[] {
  let contactsCopy = contacts.slice();
  const indexOfContact = contactsCopy.indexOf(contact);

  // Contact not in contacts
  if (indexOfContact === -1) throw `${contact} not in contacts`;

  const oldHead = contactsCopy[0];
  contactsCopy[0] = contactsCopy[indexOfContact];
  contactsCopy[indexOfContact] = oldHead;

  return contactsCopy;
}

/** Gets the primary contact number from a list of contact numbers */
export function getPrimaryContactNumber(contacts: string[]): string | undefined {
  // Assume that the primary contact is first
  return contacts[0];
}
