import isArray from 'isarray';
import isNumber from 'isnumber';
import isObject from 'isobject';

type ITarget = string[];

export const setData = (data, target: ITarget, value) => {
  if (target.length > 1) {
    const [first, ...rest] = target;
    return Object.assign({}, data, { [first]: setData(data[first], rest, value) })
  }
  return Object.assign({}, data, { [target[0]]: value });
};

export const getData = (data, target: ITarget) => {
  if (target.length > 1) {
    const [first, ...rest] = target;
    return getData(data[first], rest);
  }
  return data[target[0]];
};

export const unique = (array: any[]) => array.filter((item, index) => array.indexOf(item) === index);

export const mapToOptions = (map: { [x: string]: string }) => Object.keys(map).map((item: string) => {
  if (item === 'true') {
    return { value: true, label: map[item] };
  } else if (item === 'false') {
    return { value: false, label: map[item] };
  } else if (isNumber(item)) {
    return { value: Number(item), label: map[item] };
  }
  return { value: item, label: map[item] };
});

export const filterData = (data: object) => {
  const obj = {};
  Object.keys(data).map((key: string) => {
    const keyData = data[key];
    if (typeof keyData === 'object' && keyData !== null) {
      obj[key] = filterData(keyData);
    } else if (keyData !== '') {
      obj[key] = keyData;
    }
  })
  return obj;
};

export const graphql = (data) => {
  const startString = '{ ';
  const endString = '} ';

  const parseData = (object) => {
    let graphqlString = '';
    graphqlString += startString;
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        graphqlString += `${key} `;
        if (isObject(element)) {
          graphqlString += parseData(element);
        } else if (isArray(element) && isObject(element[0])) {
          graphqlString += parseData(element[0]);
        }
      }
    }
    graphqlString += endString;
    return graphqlString;
  };
  return parseData(data).trim();
};
