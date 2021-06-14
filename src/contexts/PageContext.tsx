import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Contact } from '../types/Contact';

/** Enumerates the pages of the application */
export enum Page {
  CREATE,
  LIST,
  UPDATE
}

type PageContextValue = {
  currentPage: Page;
  setCurrentPage: (page: Page, payload?: Contact) => void;
  payload?: Contact;
}

/** Displays a Progress Bar stuck to the top of the viewport */
const ProgressBar = ({ progress }: { progress: number }) => {
  // Clamp progress to the range [0, 1]
  const clampedProgressPercent = Math.max(0, Math.min(100, progress)).toString() + "%";

  return ReactDOM.createPortal(
    (<div 
      className="progress w-100 mb-4 shadow-sm" 
      style={
        { 
          height: "3px",
          position: "fixed",
          top: 0,
        }}>
      <div
        className="progress-bar bg-info"
        style={
          {
            width: clampedProgressPercent,
            opacity: (progress / 100)
          }} />
      </div>
    ), document.querySelector('body') as Element);
}

export const PageContext = React.createContext<PageContextValue>(null!);

type PageContextProviderProps = {
  initialPage: Page;
  children: React.ReactNode;
}

export function PageContextProvider({ initialPage, children }: PageContextProviderProps): JSX.Element {
  const [currentPage, _setCurrentPage] = React.useState<Page>(initialPage);
  const [progressState, setProgressState] = useState({ progress: 0, animate: "none" }); // HACK: Progress bar is meh code, best to take out before presenting
  const [payload, setPayload] = useState<Contact | undefined>()

  const PAGE_LOAD_DELAY_TIME = 600;
  // Payload can be used to simulate how a contact can be specified when changing pages
  // e.g. /contact/1, etc.
  function setCurrentPage(page: Page, payload?: Contact) {
    setProgressState({ progress: 100, animate: "" });
    payload && setPayload(payload);
    setTimeout(() => { 
      _setCurrentPage(page); 
      setProgressState({ progress: 0, animate: "none !important" }); 
    }, PAGE_LOAD_DELAY_TIME);
  }

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage, payload }}>
      <ProgressBar progress={progressState.progress} />
      { children}
    </PageContext.Provider>
  )
}

type PagePortalProps = {
  showFor: Page;
  children: React.ReactNode;
}

export function PagePortal({ showFor, children }: PagePortalProps): JSX.Element {
  const pageContext = React.useContext(PageContext);

  return (
    <>
      {showFor === pageContext?.currentPage && children}
    </>
  );
}