## Rubber 

[![npm version](https://badge.fury.io/js/rubber-util.svg)](https://badge.fury.io/js/rubber-util)
[![codecov](https://codecov.io/gh/YardWill/rubber/branch/master/graph/badge.svg)](https://codecov.io/gh/YardWill/rubber)
[![CircleCI](https://circleci.com/gh/YardWill/rubber.svg?style=svg)](https://circleci.com/gh/YardWill/rubber)

工具类 类似lodash

## api

```typescript
export declare const setData: (data: any, target: string[], value: any) => any;
export declare const getData: (data: any, target: string[]) => any;
export declare const unique: (array: any[]) => any[];
export declare const mapToOptions: (map: {
    [x: string]: string;
}) => ({
    value: boolean;
    label: string;
} | {
    value: number;
    label: string;
} | {
    value: string;
    label: string;
})[];

// 过滤空字符串的字段（方便后端构造db query） 生成新的对象
export declare const filterData: (data: object) => {};
export declare const graphql: (data: any) => string;
```