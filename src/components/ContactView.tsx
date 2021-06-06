import Modal from 'bootstrap/js/dist/modal';
import React, { useRef } from 'react';
import { Contact } from '../types/Contact';

/** Format given date according to US english date */
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    dateStyle: "medium"
  });
}

type ContactViewProps = {
  contact: Contact;
  onHide: () => void;
}

const ContactView = ({ contact, onHide }: ContactViewProps): JSX.Element => {
  const modalDivRef = React.useRef<HTMLDivElement>(null);
  const modal = useRef<Modal>();

  React.useEffect(() => {
    modal.current = new Modal(modalDivRef.current as Element);
    modal.current?.show();
  }, []);

  // Setup event handler
  React.useEffect(() => {
    const modalRef = modalDivRef.current;

    modalRef?.addEventListener('hidden.bs.modal', onHide);

    return function cleanup() {
      modalRef?.removeEventListener('hidden.bs.modal', onHide);
    }
  }, [onHide]);

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
            <h2 className="modal-title">
              Contact:&nbsp;
              <small className="text-muted">{firstName}</small>
            </h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
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