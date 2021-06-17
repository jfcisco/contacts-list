import { isNullOrWhitespace, isValidEmail } from "./validations";

test('isNullOrWhitespace detects null or whitespace', () => {
  const testData = [null, "", "    ", undefined];

  for (let i = 0; i < testData.length; i++) {
    expect(isNullOrWhitespace(testData[i])).toBeTruthy();
  }
});

test('isNullOrWhitespace detects non-null non-whitespace', () => {
  const testData = ["a", "b ", " c", " d "];

  for (let i = 0; i < testData.length; i++) {
    expect(isNullOrWhitespace(testData[i])).toBeFalsy();
  }
});

// For the email unit tests, handling of quoted email addresses is not implemented
test.each([
  "simple@example.com",
  "very.common@example.com",
  "disposable.style.email.with+symbol@example.com",
  "other.email-with-hyphen@example.com",
  "fully-qualified-domain@example.com",
  "user.name+tag+sorting@example.com",
  "x@example.com",
  "example-indeed@strange-example.com",
  "test/test@test.com",
  "admin@mailserver1",
  "example@s.example",
  "mailhost!username@example.org",
  "user%example.com@example.org",
  "user-@example.org"
])('isValidEmail(%s) is true', (email) => {
  const result = isValidEmail(email);
  expect(result).toBeTruthy();
})

test.each([
  "Abc.example.com",
  "A@b@c@example.com",
  "this is\"not\\allowed@example.com",
  "1234567890123456789012345678901234567890123456789012345678901234+x@example.com",
  "i_like_underscore@but_its_not_allowed_in_this_part.example.com",
])('isValidEmail(%s) is false', (email) => {
  const result = isValidEmail(email);
  expect(result).toBeFalsy();
})