import React, { useState } from 'react';
import { FormContextProvider } from '../../contexts/FormContext';
import { FormInput } from '../../types/FormInput';

// type ContactFormValues = {
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   birthday: string;
//   gender: string;
//   companyname: string;
// } | FormValues;
type FormValues = {
  [fieldName: string]: string;
};

type FormProps = {
  initialValues: FormValues; // TODO: Find better way of doing this
  children: React.ReactNode;
  onSubmit: (values: FormValues) => void;
};
export function Form({ initialValues, children, onSubmit }: FormProps) {
  // React magic for managing form state
  // Heavily inspired by Formik's APIs: http://formik.org/ 
  const [values, setFormValues] = useState<FormValues>(initialValues);

  function handleChange(e: React.SyntheticEvent<FormInput>) {
    const { name, value } = e.currentTarget;

    setFormValues(state => ({
      ...state,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Add validation
    onSubmit(values);
  }

  return (
    <FormContextProvider value={{ values: values, handleChange }}>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        {children}
      </form>
    </FormContextProvider>
  );
}
