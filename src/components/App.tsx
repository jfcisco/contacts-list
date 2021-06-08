import ContactsList from './ContactsList';
import ContactCreate from './ContactCreate';
import { Pages, PageContextProvider, Page } from '../contexts/PageContext';
import useContactsDelay from '../hooks/useContacts';
import { useEffect, useState } from 'react';

export default function App(): JSX.Element {
  const { addContact } = useContactsDelay();

  return (
    <div className="container mt-2 mt-md-5">
      <h1 className="text-muted">My Contacts</h1>
      <PageContextProvider>
        <Page showFor={Pages.CREATE}>
          <ContactCreate />
        </Page>

        <Page showFor={Pages.LIST}>
          <ContactsList />
        </Page>
      </PageContextProvider>
    </div>
  );
}