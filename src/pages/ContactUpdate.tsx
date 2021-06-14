import { Contact } from "../types/Contact";
import { Page, PageContext } from "../contexts/PageContext";
import { useContext } from "react";

type ContactUpdateProps = {
  updateContact: (c: Contact) => void;
}

export default function ContactUpdate({ updateContact }: ContactUpdateProps) {
  const { payload: contact, setCurrentPage } = useContext(PageContext);

  if (!contact) return <ContactUpdateErrorMessage />;

  return (
    <div>
      <pre>{JSON.stringify(contact)}</pre>
      <button onClick={() => setCurrentPage(Page.LIST)}>Go back!!!</button>
    </div>
  );
}

function ContactUpdateErrorMessage() {
  const { setCurrentPage } = useContext(PageContext);
  return (
    <div className="text-center">
      <p className="text-danger">Error while updating contact! No contact was selected for updating.</p>
      <button onClick={() => setCurrentPage(Page.LIST)}>Go back</button>
    </div>
  );
}