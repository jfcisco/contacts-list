import React, { useState } from 'react';
import { FormContextProvider } from '../../contexts/FormContext';
import { FormInput } from '../../types/FormInput';
import { FormValues, FormErrors } from '../../types/FormTypes';

type FormProps<T> = {
  initialValues: T;
  children: React.ReactNode;
  onSubmit: (values: T) => void;
  validate: (values: T) => FormErrors;
};

export function Form<T extends FormValues>({ initialValues, children, onSubmit, validate }: FormProps<T>) {
  // React magic for managing form state
  // Heavily inspired by Formik's APIs: http://formik.org/ 
  const [values, setFormValues] = useState<T>(initialValues);
  const [errors, setFormErrors] = useState<FormErrors>({});

  function handleChange(e: React.SyntheticEvent<FormInput>) {
    const { name, value } = e.currentTarget;

    setFormValues(state => ({
      ...state,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.keys(validate(values)).length !== 0) { // Validate method returns errors
      setFormErrors(validate(values));
    }
    else {
      onSubmit(values);
    }
  }

  return (
    <FormContextProvider value={{ values, handleChange, errors }}>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        {children}
      </form>
    </FormContextProvider>
  );
}