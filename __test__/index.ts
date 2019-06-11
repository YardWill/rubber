import 'ts-jest';
import { getData, setData, unique, mapToOptions, filterData, graphql } from '../src/index';

test('getData', () => {
  expect(getData({ a: { b: 2 } }, ['a', 'b'])).toBe(2);
});

test('setData', () => {
  const data = setData({ a: { b: 2 } }, ['a', 'b'], 3);
  expect(JSON.stringify(data)).toBe(JSON.stringify({ a: { b: 3 } }));
});

test('unique', () => {
  expect(JSON.stringify(unique([1, 2, 3, 4, 2]))).toBe(JSON.stringify([1, 2, 3, 4]));
});

test('mapToOptions', () => {
  expect(mapToOptions({
    3: '3',
    4: '4',
    hh: 'n',
    true: '1',
    false: '2',
  })).toEqual([
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 'hh', label: 'n' },
    { value: true, label: '1' },
    { value: false, label: '2' },
  ]);
});

test('filterData', () => {
  expect(filterData({
    hh: 'n', h2: {
      h1: '',
      hh: 'n',
    },
  })).toEqual({
    hh: 'n', h2: {
      hh: 'n',
    },
  });

  expect(filterData({
    hh: null, h2: {
      h1: '',
      hh: 'n',
    },
  })).toEqual({
    h2: {
      hh: 'n',
    },
  });
});

describe('graphql', () => {
  test('graphql1', () => {
    expect(graphql({ a: 1 })).toBe('{ a }');
  });

  test('graphql2', () => {
    expect(graphql({ a: 1, b: 2 })).toBe('{ a b }');
  });

  test('graphql3 object', () => {
    expect(graphql({
      a: 1,
      b: { c: 2 },
    })).toBe('{ a b { c } }');
  });

  test('graphql3 array', () => {
    class Obj {
      constructor(a) {
        return Object.assign(this, a)
      }
      aa() {
        return {aaa:'aa'}
      }
    }
    const obj = new Obj({
      a: 1,
      b: { c: 2 },
      d: [2],
    })
    expect(graphql(obj)).toBe('{ a b { c } d }');
  });

  test('graphql3 array object', () => {
    expect(graphql({
      a: 1,
      b: { c: 2 },
      d: [{ a: 2 }],
    })).toBe('{ a b { c } d { a } }');
  });
});
