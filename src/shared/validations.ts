import { CreateFormValues } from '../pages/ContactCreate';
import { FormErrors } from '../types/FormTypes';

/** Checks if the given value is null or whitespace */

export const isNullOrWhitespace = (value: string | null | undefined): boolean => {
  if (value == null)
    return true; // loose compare is intentional for checking null or undefined
  return (value.trim() === "");
};
/** Returns true if given value is a valid email. */

export const isValidEmail = (value: string) => {
  // Format pattern is based  https://en.wikipedia.org/wiki/Email_address#Syntax
  const validEmailFormat = /^([a-z]|[A-Z]|\d|\.(?!\.)|[!#$%&'*+-/=?^_`{|}~]){0,64}@([a-z]|[A-Z]|\d|-|\.){1,63}$/;
  return validEmailFormat.test(value);
};

/** Forms a Contact from the given form values, or returns an error object if the contact cannot be parsed.
 * The error object contains the list of validation errors.
 */
 export function validateContact(values: CreateFormValues): FormErrors {
  const errors: FormErrors = {};

  if (isNullOrWhitespace(values.firstName)) {
    errors.firstName = "Please enter the contact's first name.";
  }

  if (isNullOrWhitespace(values.middleName)) {
    errors.middleName = "Please enter the contact's middle name.";
  }

  if (isNullOrWhitespace(values.lastName)) {
    errors.lastName = "Please enter the contact's last name.";
  }

  // Assumption: Browser validation will be used for the birthday field
  if (isNullOrWhitespace(values.birthday)) {
    errors.birthday = "Please enter a valid date for birthday.";
  }

  if (isNullOrWhitespace(values["address.addressLine"])) {
    errors["address.addressLine"] = "Please enter an address line.";
  }

  if (isNullOrWhitespace(values["address.cityProvince"])) {
    errors["address.cityProvince"] = "Please enter a city/province.";
  }

  if (isNullOrWhitespace(values["address.country"])) {
    errors["address.country"] = "Please enter a country.";
  }

  if (isNullOrWhitespace(values.email)) {
    errors.email = "Please enter an email address.";
  }
  else if (!isValidEmail(values.email)) {
    errors.email = "Please enter a valid email address in the format (name@example.com).";
  }

  if (values.contactNumbers.length < 3) {
    errors.contactNumbers = "Please enter at least three contact numbers";
  }
  else if (values.contactNumbers.some(number => isNullOrWhitespace(number))) {
    errors.contactNumbers = "Please fill out or remove any empty rows.";
  }

  return errors;
}
