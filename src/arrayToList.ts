const arrayToList = (srcArray: number[]): object => {
  type listItem = {
    value: number,
    rest: listItem | null
  }

  const getListItemValue = (): listItem => ({ value: 0, rest: null });

  const isFirstItem = (index: number) => index === 0;
  const isArrayHasOnlyOneItem = (array: number[]) => array.length === 1;
  const isLastItem = (index: number, array: number[]) => index === array.length - 1;

  const resultList: listItem = getListItemValue();
  let lastListItem: listItem = getListItemValue();

  srcArray.forEach((itemArray, index) => {
    if (isFirstItem(index)) {
      resultList.value = itemArray;
      resultList.rest = getListItemValue();

      lastListItem = resultList.rest;

      if (isArrayHasOnlyOneItem(srcArray)) {
        resultList.rest = null;
      }
      return;
    }

    lastListItem.value = itemArray;
    lastListItem.rest = getListItemValue();

    if (isLastItem(index, srcArray)) {
      lastListItem.rest = null;
    } else {
      lastListItem = lastListItem.rest;
    }
  });

  return resultList;
}

export default arrayToList
