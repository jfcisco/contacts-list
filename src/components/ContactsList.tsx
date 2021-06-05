import { Contact, getPrimaryContactNumber, getAgeFromBirthday } from '../types/Contact';

type ContactsListRowProps = {
  contact: Contact
}

function ContactsListRow({ contact }: ContactsListRowProps): JSX.Element {
  const {
    firstName,
    lastName,
    middleName,
    birthday,
    address,
    emailAddress,
    contactNumbers
  } = contact;

  const fullName = `${lastName}, ${firstName} ${middleName[0]}.`;
  const age = getAgeFromBirthday(birthday);
  const primaryContact = getPrimaryContactNumber(contactNumbers);

  return (
    <tr role="button">
      <td>{fullName}</td>
      <td>{age}</td>
      <td>{address.cityProvince}</td>
      <td>{emailAddress}</td>
      <td>{primaryContact}</td>
    </tr>
  )
}

type ContactsListProps = {
  contacts: Contact[]
}

export default function ContactsList({ contacts }: ContactsListProps): JSX.Element {
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">City/Province</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number (Primary)</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => <ContactsListRow key={c.id} contact={c} />)}
        </tbody>
      </table>
    </div>
  );
}