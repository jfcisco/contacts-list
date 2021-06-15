export const Gender = {
  MALE: "Male",
  FEMALE: "Female",
  NONBINARY: "Non-Binary"
} as const;

// Assumption: Parts of address is free-text
export type Address = {
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
  gender?: typeof Gender[keyof typeof Gender];
  address: Address;
  emailAddress: string;
  contactNumbers: string[];
  companyName?: string;
}


