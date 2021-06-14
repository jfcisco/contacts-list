import React, { useRef, useState } from 'react';
import { FormContextProvider } from '../../contexts/FormContext';
import { FormValues, FormErrors, FormTouched, FormInput } from '../../types/FormTypes';
import './Form.css';

type FormProps<T> = {
  initialValues: T;
  children: React.ReactNode;
  onSubmit: (values: T) => void;
  validate?: (values: T) => FormErrors;
};

export function Form<T extends FormValues>({ initialValues, children, onSubmit, validate}: FormProps<T>) {
  // React magic for managing form state
  // Heavily inspired by Formik's APIs: http://formik.org/ 
  const [values, setFormValues] = useState<T>(initialValues);
  const [errors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<FormTouched<keyof T>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Perform validation on every change in values
  React.useEffect(() => {
    if (!validate) return;
    
    const errors = validate(values);
    setFormErrors(errors);
  }, [values, validate]);

  function handleBlur(e: React.FocusEvent<FormInput>) {
    setTouched(state => ({
      ...state,
      [e.target.name]: true
    }))
  }

  function handleChange(e: React.ChangeEvent<FormInput>) {
    const { name, value } = e.target;

    setFormValues(state => ({
      ...state,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Set all fields as touched
    setTouched(Object.keys(values)
      .reduce((previousState, key) => ({ ...previousState, [key]: true }), {}));
    
    // Check if validate function detected errors
    if (validate && Object.keys(validate(values)).length !== 0) { 
      setFormErrors(validate(values));
    }
    else {
      onSubmit(values);
    }
  }

  return (
    <FormContextProvider value={{ values, handleChange, errors, setFormValues, handleBlur, touched}}>
      <form ref={formRef} className="container-fluid" onSubmit={(e) => handleSubmit(e)} noValidate>
        {children}
      </form>
    </FormContextProvider>
  );
}