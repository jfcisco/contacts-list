import { useContext } from 'react';
import { PageContext, Pages } from '../contexts/PageContext';
import { Contact } from '../types/Contact';

/** Form to create a contact record */
export default function ContactCreate() {
  const pageContext = useContext(PageContext);

  return (
    <div>
      {/* TODO: Add styling especially required fields */}
      <form>
        <label htmlFor="firstname">First Name:</label>
        <input name="firstname" type="text" required />
        
        <label htmlFor="middlename">Middle Name:</label>
        <input name="middlename" type="text" required />
        
        <label htmlFor="lastname">Last Name:</label>
        <input name="lastname" type="text" required />

        {/* type date?? */}
        <label htmlFor="birthday">Birthday:</label>
        <input name="birthday" type="date" required />

        {/* Is this correct?? */}
        {/* Think about how options can be mapped to data */}
        <label htmlFor="gender">Gender:</label>
        <select name="gender">
          <option>Male</option>
          <option>Female</option>
          <option>Non-binary</option>
        </select>

        {/* Address input group*/}
        <label htmlFor="addressline">Address Line:</label>
        <input name="addressline" type="text" required/>
        <label htmlFor="cityprovince">City/Province:</label>
        <input name="cityprovince" type="text" required />
        <label htmlFor="cityprovince">Country</label>
        <input name="country" type="text" required />

        {/* What's the input type for email address? */}
        <label htmlFor="email">Email Address:</label>
        <input name="email" type="email" required />

        {/* TODO: Create contact numbers input component */}
        <ContactNumbersInput value={[]} onChange={() => { }} />
      
        <label htmlFor="companyname">Company Name:</label>
        <input name="companyname" type="text" />

        <input type="submit" />
      </form>
      <button onClick={() => pageContext?.setCurrentPage(Pages.LIST)}>
        Go Back
      </button>
    </div>
  )
}

type ContactNumbersInputProps = {
  value: string[];
  onChange: () => void;
}

/** Custom input to get a list of contact numbers from a user  */
function ContactNumbersInput({ value, onChange }: ContactNumbersInputProps): JSX.Element {
  return (<p>Exciting feature coming soon!</p>);
}