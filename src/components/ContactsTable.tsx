import { Contact, getAgeFromBirthday, getPrimaryContactNumber } from "../types/Contact";
import { Page, PageContext } from "../contexts/PageContext";
import { useContext } from "react";

type ContactsTableProps = {
  contacts: Contact[];
  setContactShown: (c: Contact) => void;
  handleDelete: (c: Contact) => void;
}

export default function ContactsTable({ contacts, setContactShown, handleDelete }: ContactsTableProps) {
  return (
  <div className="table-responsive">
    <table className="table table-hover">
      {/* Weird bug on Edge: Header bottom border disappears when hovering over first row */}
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">City/Province</th>
          <th scope="col">Email</th>
          <th scope="col">Contact Number (Primary)</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts
          ? contacts.map((c) => <ContactsListRow
            key={c.id}
            contact={c}
            onView={() => setContactShown(c)}
            onEdit={() => { }}
            onDelete={() => handleDelete(c)} />)
          : "Loading..."}
      </tbody>
    </table>

    {contacts?.length === 0 && <p className="text-center text-secondary">You have no contacts yet. Add a contact by clicking on the <span className="text-primary"><strong>Create Contact</strong></span> button above.</p>}
  </div>);
}

type ContactsListRowProps = {
  contact: Contact;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

function ContactsListRow({ contact, onView, onDelete }: ContactsListRowProps): JSX.Element {
  const {
    firstName,
    lastName,
    middleName,
    birthday,
    address,
    emailAddress,
    contactNumbers
  } = contact;

  const { setCurrentPage } = useContext(PageContext);

  const fullName = `${lastName}, ${firstName} ${middleName[0]}.`;
  const age = getAgeFromBirthday(birthday);
  const primaryContact = getPrimaryContactNumber(contactNumbers);

  return (
    <tr role="button" onClick={onView}>
      <td>{fullName}</td>
      <td>{age}</td>
      <td>{address.cityProvince}</td>
      <td>{emailAddress}</td>
      <td>{primaryContact}</td>
      <td>
        <button className="btn btn-secondary me-2" onClick={(e) => { e.stopPropagation(); setCurrentPage(Page.UPDATE, contact) }}>Update</button>
        <button className="btn btn-danger" onClick={(e) => { e.stopPropagation(); onDelete() }}>Delete</button>
      </td>
    </tr>
  )
}