import deepEqual from '../src/deepEqual';

describe("test deepEqual function", () => {
  it("Test 1", () => {
    const param1 = 3;
    const param2 = 3;
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 2", () => {
    const param1 = 2;
    const param2 = 3;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 3", () => {
    const param1 = null;
    const param2 = 3;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 4", () => {
    const param1 = 'tt';
    const param2 = null;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 5", () => {
    const param1 = 'tt';
    const param2 = undefined;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 6", () => {
    const param1 = 'tt';
    const param2 = {};
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 7", () => {
    const param1 = {};
    const param2 = {};
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 8", () => {
    const param1 = {};
    const param2 = null;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 9", () => {
    const param1 = null;
    const param2 = null;
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 10", () => {
    const param1 = null;
    const param2 = undefined;
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 11", () => {
    const param1 = 'dd';
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 12", () => {
    const param1 = {};
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 13", () => {
    const param1 = { b: 'b' };
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 14", () => {
    const param1 = { a: 'b' };
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 15", () => {
    const param1 = { a: 'a' };
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 16", () => {
    const param1 = { a: 'a' };
    const param2 = { a: 'a', b: 'b' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 17", () => {
    const param1 = { a: 'a', c: 'c' };
    const param2 = { a: 'a', b: 'b' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 18", () => {
    const param1 = { a: 'a', c: 'c' };
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 19", () => {
    const param1 = { a: 'a', d: 'd' };
    const param2 = { d: 'd', a: 'a' };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 20", () => {
    const param1 = { a: 'a', d: 'd' };
    const param2 = { d: 'd', a: 'aa' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 21", () => {
    const param1 = { a: 'a', d: 'dd' };
    const param2 = { d: 'd', a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 22", () => {
    const param1 = { a: 'a', d: undefined };
    const param2 = { a: 'a' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 23", () => {
    const param1 = { a: 'a', b: 'b' };
    const param2 = { a: {}, b: 'b' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 24", () => {
    const param1 = { a: 'a', b: { c: 'c' } };
    const param2 = { a: 'a', b: 'b' };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 25", () => {
    const param1 = { a: 'a', b: { c: 'c' } };
    const param2 = { a: 'a', b: { c: 'c' } };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 26", () => {
    const param1 = { a: 'a', b: { c: 'c', f: 'f' } };
    const param2 = { a: 'a', b: { c: 'c', f: '' } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 27", () => {
    const param1 = { a: 'a', b: { c: 'c', f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: 'c' } };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 28", () => {
    const param1 = { a: 'a', b: { c: 'c', f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: {} } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 29", () => {
    const param1 = { a: 'a', b: { c: {}, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: {} } };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 30", () => {
    const param1 = { a: 'a', b: { c: { g: 'g' }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'g' } } };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 31", () => {
    const param1 = { a: 'a', b: { c: { g: 'gg' }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'g' } } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 32", () => {
    const param1 = { a: 'a', b: { c: { g: 'gg' }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'gg', s: '' } } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 33", () => {
    const param1 = { a: 'a', b: { c: { g: 'gg', s: '' }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'gg', s: {} } } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });

  it("Test 34", () => {
    const param1 = { a: 'a', b: { c: { g: 'gg', s: {} }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'gg', s: {} } } };
    expect(deepEqual(param1, param2)).toBeTruthy();
  });

  it("Test 35", () => {
    const param1 = { a: 'a', b: { c: { g: 'gg', s: { a: '' } }, f: 'f' } };
    const param2 = { a: 'a', b: { f: 'f', c: { g: 'gg', s: { a: null } } } };
    expect(deepEqual(param1, param2)).toBeFalsy();
  });
});
