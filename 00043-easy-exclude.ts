// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
/**
 * https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
 * 如果 T 中的类型在 U 中，便返回 never 剔除掉，否则返回 T; 
 */
type MyExclude<T, U> = T extends U ? never : T 


