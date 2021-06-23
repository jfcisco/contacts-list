import { Contact, Gender } from "./types/Contact";

export const sampleContacts: Contact[] = [
    {
      id: 1,
      firstName: "Arthur",
      lastName: "Butler",
      middleName: "J.",
      birthday: new Date(1956, 1, 22),
      gender: Gender.MALE,
      address: {
        addressLine: "852 Davis Avenue",
        cityProvince: "Potter Valley, CA",
        country: "United States"
      },
      emailAddress: "ArthurJButler@armyspy.com",
      contactNumbers: ["8486670", "4445555", "09096652231"],
      companyName: "Central Hardware"
    },
    {
      id: 2,
      firstName: "Irene",
      lastName: "Fritz",
      middleName: "R.",
      birthday: new Date(1986, 10, 7),
      address: {
        addressLine: "2515 Long Street",
        cityProvince: "Gainesville, FL",
        country: "United States"
      },
      emailAddress: "IreneRFritz@teleworm.us",
      contactNumbers: ["9876543", "4456650", "5345656"]
    },
    {
      id: 3,
      firstName: "Brian",
      lastName: "Chaves",
      middleName: "P.",
      birthday: new Date(1986, 9, 30),
      address: {
        addressLine: "3899 Pineview Drive",
        cityProvince: "Rochester, MN",
        country: "United States"
      },
      emailAddress: "BrianPChaves@teleworm.us",
      contactNumbers: ["5079908065", "5416801571", "6614499359"]
    }

];
