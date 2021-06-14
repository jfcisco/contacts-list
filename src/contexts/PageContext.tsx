import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/** Enumerates the pages of the application */
export enum Page {
  CREATE,
  LIST,
  UPDATE
}

type PageContextValue = {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
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
  const [progressState, setProgressState] = useState({ progress: 0, animate: "none" });

  const PAGE_LOAD_DELAY_TIME = 600;
  function setCurrentPage(page: Page) {
    setProgressState({ progress: 100, animate: "" })
    setTimeout(() => { _setCurrentPage(page); setProgressState({ progress: 0, animate: "none !important" }); }, PAGE_LOAD_DELAY_TIME);
  }

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
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