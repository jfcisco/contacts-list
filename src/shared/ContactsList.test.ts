import { getPrimaryContactNumber, sampleContacts } from './ContactsList';

test('Can get primary contact number', () => {
  const contactNumbers = ["0", "1", "2"];
  const result = getPrimaryContactNumber(contactNumbers);

  expect(result).toBe("0");
});

test('Gets undefined when there is no primary contact', () => {
  expect(getPrimaryContactNumber([]))
    .toBeUndefined();
});