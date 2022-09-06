const deepEqual = (param1: any, param2: any): boolean => {

  if (isPrimitiveParams()) {
    return param1 === param2
  }

  if (isDifferentTypeParams()) {
    return false;
  }

  if (isEmptyObjects()) {
    return true;
  }

  if (!isObjectsLengthEqual()) {
    return false;
  }

  return isObjectsEqual();

  /* === functions === */

  function isPrimitive(param: any): boolean {
    return typeof param !== 'object' || param === null;
  }

  function isPrimitiveParams(): boolean {
    return isPrimitive(param1) && isPrimitive(param2);
  }

  function isDifferentTypeParams(): boolean {
    const isOneDiff = isPrimitive(param1) && !isPrimitive(param2);
    const isTwoDiff = !isPrimitive(param1) && isPrimitive(param2);

    return isOneDiff || isTwoDiff;
  }

  function isEmptyObjects(): boolean {
    return !Object.keys(param1).length && !Object.keys(param2).length;
  }

  function isObjectsLengthEqual(): boolean {
    return Object.keys(param1).length === Object.keys(param2).length;
  }

  function isObjectsEqual(): boolean {
    for (const keyParam1 of Object.keys(param1)) {
      if (!deepEqual(param1[keyParam1], param2[keyParam1])) {
        return false;
      }
    }
    return true;
  }
}

export default deepEqual
