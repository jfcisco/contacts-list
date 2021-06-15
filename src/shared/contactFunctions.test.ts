import { getAgeFromBirthday, getPrimaryContactNumber, setPrimaryContactNumber } from "./contactFunctions";

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