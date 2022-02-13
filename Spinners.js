//This are the spinners, a set of 5 different gear-shaped parts that scramble the given letter once. This spinners will be imported and passed to the rotor
const Spinner_1 = {
  0: 4,
  1: 6,
  2: 0,
  3: 1,
  4: 8,
  5: 14,
  6: 9,
  7: 24,
  8: 19,
  9: 10,
  10: 17,
  11: 25,
  12: 11,
  13: 12,
  14: 7,
  15: 21,
  16: 20,
  17: 18,
  18: 23,
  19: 13,
  29: 2,
  21: 3,
  22: 5,
  23: 15,
  24: 16,
  25: 22,
};
const Spinner_2 = {
  0: 2,
  1: 4,
  2: 6,
  3: 8,
  4: 10,
  5: 14,
  6: 12,
  7: 16,
  8: 18,
  9: 20,
  10: 22,
  11: 24,
  12: 0,
  13: 1,
  14: 3,
  15: 5,
  16: 7,
  17: 25,
  18: 9,
  19: 11,
  20: 13,
  21: 15,
  22: 17,
  23: 19,
  24: 21,
  25: 23,
};
const Spinner_3 = {
  0: 1,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  5: 11,
  6: 13,
  7: 15,
  8: 17,
  9: 19,
  10: 21,
  11: 23,
  12: 25,
  13: 24,
  14: 22,
  15: 20,
  16: 18,
  17: 16,
  18: 14,
  19: 12,
  20: 10,
  21: 8,
  22: 6,
  23: 4,
  24: 2,
  25: 0,
};


export const Spinners = (id) => {
  switch (id) {
    case 1:
      return Spinner_1;
    case 2:
      return Spinner_2;
    case 3:
      return Spinner_3;
    default:
      return new Error('NO_SPINNER_FOUND')
  }
}

