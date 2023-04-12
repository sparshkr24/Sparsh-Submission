const sumByDay = require('./index');

test('sumByDay should return an object with keys for all days of the week', () => {
  D = {  '2020-01-01':6, '2020-01-04':12,  '2020-01-05':14,  '2020-01-06':2,  '2020-01-07':4 }
  const result = sumByDay(D);
  expect(Object.keys(result)).toEqual(["Wed", "Sat", "Sun", "Mon", "Tue", "Thu", "Fri"]);
});


test('sumByDay should sum up values for the same day of the week', () => {
  const D = {'2020-01-01':4, '2020-01-02':4, '2020-01-03':6,  '2020-01-04':8,  '2020-01-05':2,  '2020-01-06':-6,  '2020-01-07':2, '2020-01-08':-2}
  const result = sumByDay(D);
  expect(result).toEqual({ Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2, Mon: -6, Tue: 2 });
});

test('sumByDay should interpolate missing days using linear interpolation (2*x1 - x2)', () => {
  const D = {  '2020-01-01':6, '2020-01-04':12,  '2020-01-05':14,  '2020-01-06':2,  '2020-01-07':4 }
  const result = sumByDay(D);
  expect(result).toEqual({ Wed: 6, Sat: 12, Sun: 14, Mon: 2, Tue: 4, Thu: 8, Fri: 10 });
});


test('test case when only values for Sunday and Monday are given', () => {
  const D = { '2020-01-05':14,  '2020-01-06':2}
  const result = sumByDay(D);
  expect(result).toEqual({ Sun: 14, Mon: 2, Tue: -10, Wed: -22, Thu: -34, Fri: -46, Sat: -58 });
});


test('sumByDay should handle cases where there are no dates', () => {
  const D = {};
  const result = sumByDay(D);
  expect(result).toEqual("Provide a valid input dictionary");
});
