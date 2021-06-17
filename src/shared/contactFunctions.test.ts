import {
  getAgeFromBirthday,
  getPrimaryContactNumber,
  setPrimaryContactNumber,
  parseIsoDateString
} from "./contactFunctions";

test('Can get primary contact number', () => {
  const contactNumbers = ["0", "1", "2"];
  const result = getPrimaryContactNumber(contactNumbers);

  expect(result).toBe("0");
});

test('Gets undefined when there is no primary contact', () => {
  expect(getPrimaryContactNumber([]))
    .toBeUndefined();
});

test('Can set primary contact number', () => {
  const contactNumbers = ["0", "1", "2"];
  const result = setPrimaryContactNumber(contactNumbers, "2");
  const expectedResult = ["2", "1", "0"];

  for (let i = 0; i < result.length; i++) {
    expect(result[i]).toEqual(expectedResult[i]);
  }
})

test('Error thrown when trying to set non-existing number as primary', () => {
  expect(() => setPrimaryContactNumber(["0", "1"], "2")).toThrowError("2 not in contacts");
})

test('Can get age from birthday', () => {
  const myBirthday = new Date(1998, 7, 4);
  const result = getAgeFromBirthday(myBirthday);

  expect(result).toEqual(22);
})

function generateYearOneDate() {
  let yearOneSample = new Date(1, 0, 1);
  yearOneSample.setFullYear(1);
  return yearOneSample;
}

test.each([
  ["2021-01-01", new Date(2021, 0, 1)],
  ["0001-01-01", generateYearOneDate()],
  ["1970-12-31", new Date(1970, 11, 31)],
  ["2020-02-29", new Date(2020, 1, 29)],
  ["2200-07-04", new Date(2200, 6, 4)],
  ["2021-02-29", new Date(2021, 1, 29)]
])('Parses valid ISO date strings %s', (isoString, dateObject) => {
  const result = parseIsoDateString(isoString);
  expect(result).toEqual(dateObject);
})

test.each([
  "hello",
  "",
  "01-",
  "02/12/2021"
])('Fails to parse invalid strings', (input) => {
  const tryParseIsoString = () => parseIsoDateString(input);

  expect(tryParseIsoString).toThrowError(`${input} is not a valid ISO date string.`);
})