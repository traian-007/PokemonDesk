import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('must take first letter of argument "ab", at the output get a string with first letter to upper case', () => {
    const stringWithCapitalizeFirstLetter = toCapitalizeFirstLetter('ab');

    expect(stringWithCapitalizeFirstLetter).toBe('Ab');
  });
  test('must take first letter of argument "ab", at the output get a string with first letter to upper case', () => {
    const stringWithCapitalizeFirstLetter = toCapitalizeFirstLetter('ab');

    expect(typeof stringWithCapitalizeFirstLetter === 'string').toEqual(stringWithCapitalizeFirstLetter === 'Ab');
  });
  test('must take first letter of argu"ab", at the output get a string with first letter to upper case', () => {
    const stringWithCapitalizeFirstLetter = toCapitalizeFirstLetter('ab');

    expect(typeof stringWithCapitalizeFirstLetter === 'string').toEqual(typeof 'Ab' === 'string');
  });
});
