## Rubber 

工具类 类似lodash

## api

```typescript

export declare const setData: (data: any, target: string[], value: any) => any;
export declare const getData: (data: any, target: string[]) => any;
export declare const unique: (array: any[]) => any[];
export declare const mapToOptions: (map: {
    [x: string]: string;
}) => {
    value: string;
    label: string;
}[];
// 过滤_all的字段 类似delete 生成新的对象
export declare const filterData: (data: Object) => {};

```