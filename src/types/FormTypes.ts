
export interface FormValues {
  [fieldName: string]: any;
};

export interface FormErrors {
  [fieldName: string]: string;
}

export type FormTouched<T extends string | number | symbol> = {
  [P in T]?: boolean;
}

export type FieldProps = {
  name: string;
};

export type FormInput = HTMLInputElement | HTMLSelectElement;