// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}


// ============= Your Code Here =============
/**
 * 实现 TS 内置的 Pick<T, K>，但不可以使用它。
 * 从类型 T 中选择出属性 K，构造成一个新的类型。
 */
/**
 * 知识点 
 * keyof: 取 interface 的键名后保存为联合类型
 * in: 取联合类型的值，主要用于数组和对象的构建
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
} 
