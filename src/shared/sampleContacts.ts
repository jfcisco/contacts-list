import { Contact } from "./ContactsList";

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