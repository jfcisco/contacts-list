/**
 * Returns the list of contacts with the given contact as the primary contact.
*/

export function setPrimaryContactNumber(contacts: string[], contact: string): string[] {
  let contactsCopy = contacts.slice();
  const indexOfContact = contactsCopy.indexOf(contact);

  // Contact not in contacts
  if (indexOfContact === -1)
    throw new Error(`${contact} not in contacts`);

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
/** Gets person's age as of the time of function call from their birthday.
 * Assumes 31,556,952,000 milliseconds in a year.
*/

export function getAgeFromBirthday(birthday: Date): Number {
  const ageInMs = Date.now() - birthday.getTime();
  // Use naive way of aonverting ms to year
  // 1000 ms in second
  // 60 * 60 * 24 seconds in a day
  // 365.2425 days in a year per wikipedia
  // thus, 31,556,952,000 in a year
  const msInAYear = 31556952000;
  return Math.floor(ageInMs / msInAYear);
}

/** Helper method to turn Date object into an ISO-format date string (i.e. yyyy-MM-dd)
 * for setting date input value
 */
 export function formatAsISODate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
