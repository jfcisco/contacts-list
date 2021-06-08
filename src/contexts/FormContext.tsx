import React, { useContext } from 'react';
import { FormInput } from "../types/FormInput";

type FormContextType = {
  values: {
    [field: string]: string;
  };
  handleChange: React.FormEventHandler<FormInput>;
};
// TODO: Extract FormContext to another file 
function createFormContext() {
  // Code reference: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context
  const FormContext = React.createContext<FormContextType | undefined>(undefined);

  function useFormContext() {
    const c = useContext(FormContext);
    if (c === undefined) {
      throw new Error("useFormContext must be used inside a FormContextProvider with a value");
    }
    return c;
  }

  return [useFormContext, FormContext.Provider] as const;
}

export const [useFormContext, FormContextProvider] = createFormContext();