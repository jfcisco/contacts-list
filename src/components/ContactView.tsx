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

  return (
    <div ref={modalDivRef} className="modal fade" id="view-contact">
      <div className="modal-dialog modal-fullscreen-md-down" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={() => closeModal()}></button>
          </div>
          <div className="modal-body">
            <h1>{`${lastName}, ${firstName} ${middleName}`}</h1>

            <dl>
              <dt>First Name:</dt>
              <dd>{firstName}</dd>
              <dt>Middle Name:</dt>
              <dd>{middleName}</dd>
              <dt>Last Name:</dt>
              <dd>{lastName}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactView;