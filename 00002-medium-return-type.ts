// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>
];

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

// ============= Your Code Here =============
/**
 * 首先约束传入类型为函数类型
 * 然后使用 infer 关键字，将传入的函数类型返回类型定义为 R
 */
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : unknown;
