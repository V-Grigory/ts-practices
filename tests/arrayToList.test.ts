import arrayToList from '../src/arrayToList';

const testData = [
  {
    givenArray: [5],

    returnedList: {
      value: 5,
      rest: null
    }
  },
  {
    givenArray: [2, 4, 7],

    returnedList: {
      value: 2,
      rest: {
        value: 4,
        rest: {
          value: 7,
          rest: null
        }
      }
    }
  }
];

describe("test arrayToList function", () => {
  it("should return list: Test 1", () => {
    expect(arrayToList(testData[0].givenArray)).toEqual(testData[0].returnedList);
  });

  it("should return list: Test 2", () => {
    expect(arrayToList(testData[1].givenArray)).toEqual(testData[1].returnedList);
  });
});
