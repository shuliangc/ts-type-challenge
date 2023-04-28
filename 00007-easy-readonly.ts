// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
/**
 * 不要使用内置的Readonly<T>，自己实现一个。
 * 该 Readonly 会接收一个 _泛型参数_，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
 * 也就是不可以再对该对象的属性赋值。
 */
/**
 * 知识点
 * readonly: 对于 TypeScript，属性也可以标记为只读。虽然它不会在运行时更改任何行为，但标记为 在类型检查期间无法写入只读.
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
} 
