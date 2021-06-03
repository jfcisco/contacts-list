type Gender = "Male" | "Female" | "Non-Binary";

// Assumption: Parts of address is free-text
type Address = {
  addressLine: string;
  cityProvince: string;
  country: string;
}

// TODO: Write a set primary contact function

/** Gets the primary contact number from a list of contact numbers */
export function getPrimaryContactNumber(contacts: string[]): string | undefined {
  // Assume that the primary contact is first
  return contacts[0];
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

export const sampleContacts: Contact[] = [{
  id: 1,
  firstName: "John",
  lastName: "Doe",
  middleName: "Q.",
  birthday: new Date(1970, 1, 1),
  gender: "Male",
  address: {
    addressLine: "5 Oak Way",
    cityProvince: "Sample City",
    country: "Philippines"
  },
  emailAddress: "john.doe@example.com",
  contactNumbers: ["848 6670"],
  companyName: "Alphabet, Inc."
},
{
  id: 2,
  firstName: "Mary",
  lastName: "Sue",
  middleName: "A.",
  birthday: new Date(1986, 10, 7),
  address: {
    addressLine: "10 Gaviria St.",
    cityProvince: "Sample City",
    country: "Philippines"
  },
  emailAddress: "john.doe@example.com",
  contactNumbers: ["848 6670"]
}];