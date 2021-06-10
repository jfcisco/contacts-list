import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/** Enumerates the pages of the application */
export enum Pages {
  CREATE,
  LIST,
  UPDATE
}

type PageContextValue = {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
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

export function PageContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [currentPage, _setCurrentPage] = React.useState<Pages>(Pages.LIST);
  const [progressState, setProgressState] = useState({ progress: 0, animate: "none" });

  const PAGE_LOAD_DELAY_TIME = 600;
  function setCurrentPage(page: Pages) {
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

type PageProps = {
  showFor: Pages;
  children: React.ReactNode;
}

export function Page({ showFor, children }: PageProps): JSX.Element {
  const pageContext = React.useContext(PageContext);

  return (
    <>
      {showFor === pageContext?.currentPage && children}
    </>
  );
}