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
            <dl className="row">
              <div className="col-sm-4">
                <dt>First Name</dt>
                <dd>{firstName}</dd>
              </div>

              <div className="col-sm-4">
                <dt>Middle Name</dt>
                <dd>{middleName}</dd>
              </div>

              <div className="col-sm-4">
                <dt>Last Name</dt>
                <dd>{lastName}</dd>
              </div>

              <div className="row row-cols-1 row-cols-md-2">
                <dt className="col order-0">Birthday</dt>
                <dd className="col order-md-2">{formatDate(birthday)}</dd>

                <dt className="col order-md-1">Gender</dt>
                <dd className="col order-md-3">{gender ? gender : "Not specified"}</dd>
              </div>
              
              <dt>Address</dt>
              <dd>
                <dl className="row row-cols-md-1">
                  <dt className="text-muted small">Address Line</dt>
                  <dd className="">{address.addressLine}</dd>

                  <dt className="text-muted small">City/Province</dt>
                  <dd className="">{address.cityProvince}</dd>
                  
                  <dt className="text-muted small">Country</dt>
                  <dd className="">{address.country}</dd>
                </dl>
              </dd>

              <dt>Email Address</dt>
              <dd>{emailAddress}</dd>

              <dt>Contact Numbers:</dt>
              <dd>
                <ul>
                  {contactNumbers.map((contactNumber, i) => {
                    // Assume that first contact number is primary
                    return (<li key={i} className={(i === 0) ? "text-primary" : ""}>{contactNumber.toString() + (i === 0 ? " (Primary)" : "")}</li>);
                  })}
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