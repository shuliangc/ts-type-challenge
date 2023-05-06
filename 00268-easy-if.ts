// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>


// ============= Your Code Here =============
/**
 * 约束传入类型 C 必须为布尔值类型
 * tips: 非严格模式中 null 是可以匹配布尔值的
 */
type If<C extends boolean, T, F> = C extends true ? T : F 
