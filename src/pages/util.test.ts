import {isNullOrWhitespace} from './ContactCreate';

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