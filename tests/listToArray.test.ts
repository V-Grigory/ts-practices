import listToArray from '../src/listToArray';

const testData = [
  {
    givenList: {
      value: 5,
      rest: null
    },

    returnedArray: [5]
  },
  {
    givenList: {
      value: 2,
      rest: {
        value: 4,
        rest: {
          value: 7,
          rest: {
            value: 7,
            rest: null
          }
        }
      }
    },

    returnedArray: [2, 4, 7, 7]
  }
];

describe("test listToArray function", () => {
  it("should return array: Test 1", () => {
    expect(listToArray(testData[0].givenList)).toEqual(testData[0].returnedArray);
  });

  it("should return array: Test 2", () => {
    expect(listToArray(testData[1].givenList)).toEqual(testData[1].returnedArray);
  });
});
