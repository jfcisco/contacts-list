import React, { useContext } from 'react';
import { FormInput } from "../types/FormInput";

type FormContextType<T> = {
  values: T;
  handleChange: React.FormEventHandler<FormInput>;
  errors: Partial<T>;
  setFormValues: React.Dispatch<React.SetStateAction<T>>;
  touched: Partial<T>;
  handleBlur: React.FocusEventHandler<FormInput>;
};
 

// Generic context magic with thanks to https://stackoverflow.com/questions/60725621/react-context-with-generics
function createFormContext() {
  // Code reference: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context
  const FormContext = React.createContext<FormContextType<any>>(undefined!);

  function useFormContext<T>() {
    const c = useContext<FormContextType<T>>(FormContext);
    if (c === undefined) {
      throw new Error("useFormContext must be used inside a FormContextProvider with a value");
    }
    return c;
  }

  return [useFormContext, FormContext.Provider] as const;
}

export const [useFormContext, FormContextProvider] = createFormContext();