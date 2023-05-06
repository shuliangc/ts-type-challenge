// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
];

// @ts-expect-error
type error = MyAwaited<number>;

// ============= Your Code Here =============
/**
 * 限制传入的类型为 Promise 类型
 * 使用 infer 推导，传入的 Promise 类型的类型参数，如果还是 Promise 类型递归执行，否则直接返回推导出的类型
 */
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<unknown>
    ? MyAwaited<U>
    : U
  : never;
