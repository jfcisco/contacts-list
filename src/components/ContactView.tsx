import Modal from 'bootstrap/js/dist/modal';
import React from 'react';
import { Contact } from '../types/Contact';

type ContactViewProps = {
  contact: Contact;
  modalRef: React.MutableRefObject<Modal | undefined>
}

const ContactView = ({ modalRef, contact }: ContactViewProps): JSX.Element => {
  // TODO: Possibly make the modal an HOC for reusability
  const modalDivRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    modalRef.current = new Modal(modalDivRef.current as Element);
  }, []);

  const closeModal = () => {
    if (modalRef.current) modalRef.current.hide();
  }

  const {
    firstName,
    lastName,
    middleName,
    birthday,
    gender,
    address,
    emailAddress,
    contactNumbers,
    companyName
  } = contact;

  /** Format given date according to US english date */
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      dateStyle: "medium"
    });
  }

  return (
    <div ref={modalDivRef} className="modal fade" id="view-contact">
      <div className="modal-dialog modal-fullscreen-md-down" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={() => closeModal()}></button>
          </div>
          <div className="modal-body">
            <h1>Contact</h1>
            <h2>{`${lastName}, ${firstName} ${middleName}`}</h2>
            {/* TODO: Grid styling for dl */}
            <dl>
              <dt>First Name</dt>
              <dd>{firstName}</dd>
              
              <dt>Middle Name</dt>
              <dd>{middleName}</dd>
              
              <dt>Last Name</dt>
              <dd>{lastName}</dd>
              
              <dt>Birthday</dt>
              <dd>{formatDate(birthday)}</dd>

              <dt>Gender</dt>
              <dd>{gender ? gender : "Not specified"}</dd>
              
              <dt>Address</dt>
              <dd>
                <span>{address.addressLine}</span>
                <span>{address.cityProvince}</span>
                <span>{address.country}</span>
              </dd>

              <dt>Email Address</dt>
              <dd>{emailAddress}</dd>

              <dt>Contact Numbers:</dt>
              <dd>
                {/* TODO: Look up if below is legal HTML */}
                <ul>
                  {contactNumbers.map((contactNumber, i) => {
                    // Assume that first contact number is primary
                    // TODO: Style primary contact number
                    return (<li key={i} className={(i === 0) ? "contact-primary" : ""}>{contactNumber}</li>);
                  }) }
                </ul>
              </dd>

              <dt>Company Name</dt>
              <dd>{companyName ? companyName : "Not specified"}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactView;