import { sampleContacts } from '../shared/sampleContacts';

export default function App(): JSX.Element {
  return (
    <ul className="container">
      { sampleContacts.map((contact) => <li><pre><code>{JSON.stringify(contact)}</code></pre></li>)}
    </ul>
  );
}