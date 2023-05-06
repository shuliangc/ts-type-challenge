// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<
    Equal<
      Concat<["1", 2, "3"], [false, boolean, "4"]>,
      ["1", 2, "3", false, boolean, "4"]
    >
  >
];

// ============= Your Code Here =============
/**
 * TS 支持 spread 操作符
 * 所以我们只要约束传入类型为数组即可
 */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
