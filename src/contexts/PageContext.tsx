import React from 'react';

/** Enumerates the pages of the application */
export enum Pages {
  CREATE,
  LIST
}

type PageContextValue = {
  currentPage: Pages;
  setCurrentPage: (page: Pages) => void;
}

export const PageContext = React.createContext<PageContextValue>(null!);

export function PageContextProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [currentPage, setCurrentPage] = React.useState<Pages>(Pages.LIST);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
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