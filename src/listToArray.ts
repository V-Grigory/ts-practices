const listToArray = (srcList: object): number[] => {
  type listItem = {
    value: number,
    rest: listItem | null
  }

  const resultArray: number[] = [];

  const addListItemToResultArray = (listItem: any) => {
    resultArray.push(listItem.value);

    if (listItem.rest) {
      addListItemToResultArray(listItem.rest);
    }
  }

  addListItemToResultArray(srcList);

  return resultArray;
}

export default listToArray
