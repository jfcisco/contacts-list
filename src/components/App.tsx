import { sampleContacts } from '../sampleContacts';
import ContactsList from './ContactsList';

export default function App(): JSX.Element {
  return (
    <div className="container">
      <ContactsList contacts={sampleContacts} />
    </div>
  );
}