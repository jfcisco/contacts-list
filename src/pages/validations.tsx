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
