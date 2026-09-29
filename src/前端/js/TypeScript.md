---
title: TypeScript
date: 2023-09-15 10:16:02
order: 2
category:
  - 前端
  - 学习笔记
tag:
  - TypeScript
---

# TypeScript

JavaScript 的核心特点就是灵活，但随着项目规模的增大，灵活反而增加开发者的心智负担。例如在代码中一个变量可以被赋予字符串、布尔、数字、甚至是函数，这样就充满了不确定性。而且这些不确定性可能需要在代码运行的时候才能被发现。所以我们需要类型的约束。

- TypeScript 更像是后端 JAVA，让 JS 可以开发大型企业项目
- TS 提供的类型系统可以帮助我们在写代码时提供丰富的语法提示
- 在编写时会对代码进行类型检查从而避免线上问题

::: tip
越来越多的项目开始使用 TypeScript 了，典型的 Vue3、Pinia、NodeJS 等。
我们也经常为了让编辑器拥有更好的支持去编写.d.ts 文件。
:::

## 1. 环境配置和搭建

### 什么是 TypeScript

`TypeScript` 是 `Javascript` 的超集，遵循最新的 `ES5/ES6` 规范。`Typescript` 扩展了 `Javascript` 语法。

![TypeScript](data:image/jpeg;base64,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)

### 环境配置

TypeScript 无法直接在浏览器运行，需要将编写的 ts 编译转换成 js 再运行。

单独编译 ts 文件时需要全局安装 typescript

```sh
npm install typescript -g
tsc --init # 生成tsconfig.json
```

安装完成后可以通过 tsc 编译 ts 文件，会在同目录下生成编译好的 js 文件。

```sh
tsc # 可以将ts文件编译成js文件
tsc --watch # 监控ts文件变化生成js文件
```

也可以通过构建工具（webpack、rollup、esbuild 等）转换成 js 去运行

## 2. TypeScript 基础类型

1. string number boolean

```ts
// 小写的类型一般用于描述基本类型
let str1: string = '1';
// 大写的类型用来描述示例类型
let str2: String = '2';
let str3: String = new String('3');
```

2. 数组

```ts
// 类型[]
let arr1: number[] = [1, 2, 3, 4];
// Array<类型>
let arr2: Array<number> = [1, 2, 3, 4];
// 声明数组中的类型既有数字也有字符串
let arr3: (number | string)[] = [1, 2, 3, 4, 'a', 'b'];
```

3. 元组 tuple

```ts
// 元组还是数字，只是对每个元素的位置进行了描述
// 元组在新增内容的时候，不能增加额外的类型值，只能是已有的，而且增加后无法访问
let tuple: [string, number, string, number] = ['1', 2, '3', 4];
```

4. 枚举

```ts
// 枚举类型可以进行反举（值是数字的时候可以反过来枚举），枚举没有值会根据上面的索引自动累加
// 枚举在编译成js时，会编译成对象，通常使用常量枚举，不会额外编辑成对象，更节约性能
const enum STARUS {
  'OK' = 100,
  'NO_OK',
  'NOT_FOUND',
}
```

5. 对象 object

```ts
// 对象类型
let obj: object = {};
let obj1: {} = {};
// 对象类型可以描述对象的属性和方法
let obj2: { name: string; age: number } = { name: '张三', age: 18 };
// 可选属性加 ? 号以表示属性可以不存在
let obj3: { name: string; age?: number } = { name: '张三' };
// 不分配原始对象的属性，只能分配对象的属性和方法
let obj4: { [key: string]: any } = {};
```

6. symbol

`symbol` 是 ES6 新增的类型，用于创建唯一的标识符。`symbol` 类型的值是唯一的，不能被转换为字符串。`symbol` 类型的值可以作为对象的属性名。

`symbol` 前面不能加 new 关键字，直接调用即可创建一个独一无二的 symbol 类型的值。

```ts
// symbol类型
let s1: symbol = Symbol('sym');
let s2: symbol = Symbol('sym');

console.log(s1 === s2); // false
```

`symbol` 类型作为对象的属性名时，不会被 `for...in` 循环遍历到，也不会被 `Object.keys()` 、`Object.getOwnPropertyNames()` 、`JSON.stringify()` 等方法获取到。

可以通过 `Object.getOwnPropertySymbols()` 方法获取到所有 symbol 类型的属性名。

```ts
const name1 = Symbol('name1');
const obj = {
  [name1]: '张三',
  age: 18,
};

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(name1)]
```

可以使用 es6 新增的 `Reflect` 类来操作 symbol 类型的属性名。

```ts
const name1 = Symbol('name1');
const obj = {
  [name1]: '张三',
  age: 18,
};

console.log(Reflect.has(obj, name1)); // true
console.log(Reflect.get(obj, name1)); // 张三
console.log(Reflect.ownKeys(obj)); // [Symbol(name1), 'age']
```

## 3. 函数类型

函数类型主要描述函数的**参数**和**返回值**，可以像变量一样为参数和返回值添加类型注解。

```ts
const sum = (a: number, b: number): number => a + b;
```

### 参数与返回值

- 参数类型写在参数名之后，返回值类型写在参数列表之后
- 返回值类型可以省略，`TypeScript` 会根据函数体自动推断
- 参数不能多传也不能少传，类型必须匹配

```ts
// 完整写法
function sum1(a: number, b: number): number {
  return a + b;
}

// 省略返回值类型，由类型推断得出为 number
function sum2(a: number, b: number) {
  return a + b;
}

// 没有返回值时返回 void
function log(msg: string): void {
  console.log(msg);
}
```

### 可选参数和默认参数

可选参数使用 `?` 标识，必须放在必选参数之后；默认参数在没有传值时使用默认值。

```ts
// 可选参数：b 可以不传
function sum(a: number, b?: number): number {
  return b ? a + b : a;
}

// 默认参数：b 不传时默认为 0
function sum2(a: number, b: number = 0): number {
  return a + b;
}
```

### 剩余参数

剩余参数使用 `...` 收集多个参数为一个数组，需要显式指定数组类型。

```ts
function sum(...nums: number[]): number {
  return nums.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3); // 6
```

### 函数类型表达式

使用类型别名描述一个函数的类型，箭头 `=>` 表示返回值类型。

```ts
// 定义一个函数类型：接收两个 number，返回 number
type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => a + b;
```

使用接口描述函数类型时，需要借助调用签名：

```ts
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;
```

### 函数重载

当同一个函数根据不同的参数返回不同的结果时，可以使用函数重载，先声明重载签名，再写实现签名。

```ts
function fn(x: string): string;
function fn(x: number): number;
function fn(x: string | number): string | number {
  return x;
}

fn('a'); // string
fn(1); // number
```

### this 类型

函数的第一个参数名为 `this` 时，用于指定函数内部 `this` 的类型。

```ts
interface User {
  name: string;
}

function getName(this: User): string {
  return this.name;
}
```

### 泛型函数

泛型让函数在调用时确定类型，从而复用逻辑并保留类型信息。

```ts
// T 为类型参数，调用时由传入的参数推断
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello'); // string
identity(123); // 自动推断为 number
```

## 4. any 和 never

### any

`any` 表示任意类型，一旦使用了 `any`，`TypeScript` 就会放弃对该值的类型检查，它可以被赋值为任意类型，也可以赋值给任意类型。

```ts
let value: any = 1;
value = 'a';
value = true;
value = () => {};

// 不会报错，也不会获得类型提示
value.foo.bar;
value();
```

`any` 的使用场景：

- 类型暂时无法确定时作为过渡，后续应尽快补充准确的类型
- 兼容老旧或没有类型声明的第三方库

需要注意：

- 滥用 `any` 会失去 `TypeScript` 的类型保护，等同于写 `JavaScript`，应尽量避免
- 未声明类型且无法推断时，参数会被隐式推断为 `any`，开启 `noImplicitAny` 后这种写法会直接报错

```ts
// noImplicitAny 开启后报错：参数 a 隐式具有 any 类型
function fn(a) {
  return a;
}
```

与 `any` 相关但更安全的类型是 `unknown`：它同样可以接收任意值，但在使用前必须先进行类型收窄，推荐用它替代 `any`。

```ts
let value: unknown = 'hello';

// 报错：unknown 类型不能直接使用
// value.toUpperCase();

if (typeof value === 'string') {
  value.toUpperCase(); // 类型收窄后才能使用
}
```

### never

`never` 表示**永远不会出现的值**，是所有类型的子类型（可以赋值给任何类型），但没有任何类型可以赋值给 `never`（除了 `never` 本身）。

常见的使用场景：

1. 总会抛出异常的函数，永远不会有返回值

```ts
function error(msg: string): never {
  throw new Error(msg);
}
```

2. 永远不会结束的循环（死循环）

```ts
function loop(): never {
  while (true) {
    // ...
  }
}
```

3. 联合类型的穷尽检查，配合 `switch` 使用，确保所有分支都被处理

```ts
type Shape = 'circle' | 'square';

function area(shape: Shape): number {
  switch (shape) {
    case 'circle':
      return 1;
    case 'square':
      return 2;
    default: {
      // 当所有分支都覆盖后，shape 被收窄为 never
      // 若新增了联合类型成员而未处理，此处会报错
      const exhaustive: never = shape;
      return exhaustive;
    }
  }
}
```

`never` 与 `void` 的区别：

| 类型    | 含义                                             |
| ------- | ------------------------------------------------ |
| `void`  | 函数正常返回，只是没有返回值（返回 `undefined`） |
| `never` | 函数永远不会正常返回，要么抛异常，要么死循环     |

## 5. interface

`interface` 用来描述一个对象的结构（有哪些属性、方法以及它们的类型），是 `TypeScript` 中定义对象类型的主要方式。

### 定义对象类型

```ts
interface User {
  name: string;
  age: number;
  sayHi(): void;
}

const user: User = {
  name: '张三',
  age: 18,
  sayHi() {
    console.log('hi');
  },
};
```

### 可选属性和只读属性

- 可选属性使用 `?`，表示该属性可以不存在
- 只读属性使用 `readonly`，初始化后不能再修改

```ts
interface User {
  name: string;
  age?: number;
  readonly id: number;
}

const user: User = { name: '张三', id: 1 };
user.name = '李四'; // 可以修改
// user.id = 2; // 报错：id 是只读属性
```

### 索引签名

当对象的属性名不确定但值的类型统一时，可以使用索引签名。

```ts
interface StringMap {
  [key: string]: string;
}

const map: StringMap = { a: '1', b: '2' };
```

### 描述函数类型

接口可以通过调用签名描述函数类型。

```ts
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a, b) => a + b;
```

### 接口继承

接口之间可以通过 `extends` 继承，一个接口也可以同时继承多个接口。

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark(): void;
}

const dog: Dog = {
  name: '旺财',
  bark() {
    console.log('wang');
  },
};
```

### 声明合并

同名的 `interface` 会自动合并，常用于扩展第三方库的类型声明。

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// 合并后 User 同时拥有 name 和 age
const user: User = { name: '张三', age: 18 };
```

### interface 与 type 的区别

| 对比项                   | `interface` | `type`       |
| ------------------------ | ----------- | ------------ |
| 描述对象                 | 支持        | 支持         |
| 描述联合、元组、原始类型 | 不支持      | 支持         |
| 继承 / 扩展              | `extends`   | `&` 交叉类型 |
| 声明合并                 | 支持        | 不支持       |

一般原则：描述对象结构时优先使用 `interface`，需要定义联合类型、元组或更复杂的类型时使用 `type`。

```ts
// interface 使用 extends
interface A {
  a: string;
}
interface B extends A {
  b: string;
}

// type 使用交叉类型
type C = { a: string };
type D = C & { b: string };
```

## 6. class

`class` 是 `ES6` 引入的语法，用于定义类。`TypeScript` 在此基础上增加了属性的类型注解和访问修饰符等特性。

### 定义类

类的属性需要在类中先声明并指定类型，再在构造函数中赋值。

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHi(): void {
    console.log(`我是 ${this.name}`);
  }
}

const p = new Person('张三', 18);
p.sayHi();
```

使用参数属性可以简化上述写法，在构造函数参数前加修饰符即可同时声明并赋值属性。

```ts
class Person {
  // 等价于先声明再在构造函数中赋值
  constructor(public name: string, public age: number) {}
}
```

### 访问修饰符

| 修饰符      | 说明                               |
| ----------- | ---------------------------------- |
| `public`    | 公开，默认值，任何地方都可访问     |
| `private`   | 私有，只能在当前类内部访问         |
| `protected` | 受保护，只能在当前类及其子类中访问 |
| `readonly`  | 只读，初始化后不能修改             |

```ts
class Person {
  public name: string;
  private age: number;
  protected sex: string;
  readonly id: number;

  constructor(name: string, age: number, sex: string, id: number) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.id = id;
  }
}

const p = new Person('张三', 18, '男', 1);
p.name; // 可以访问
// p.age; // 报错：private 属性只能在类内部访问
// p.sex; // 报错：protected 属性只能在类及子类中访问
```

### 继承

子类通过 `extends` 继承父类，使用 `super` 调用父类的构造函数和方法。

```ts
class Animal {
  constructor(public name: string) {}

  move(): void {
    console.log(`${this.name} 在移动`);
  }
}

class Dog extends Animal {
  constructor(name: string, public age: number) {
    super(name); // 调用父类构造函数
  }

  bark(): void {
    super.move(); // 调用父类方法
    console.log('wang');
  }
}
```

### 抽象类

使用 `abstract` 定义的抽象类不能被实例化，只能被继承；抽象方法必须在子类中实现。

```ts
abstract class Animal {
  // 抽象方法，没有实现，子类必须实现
  abstract makeSound(): void;

  move(): void {
    console.log('移动');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('wang');
  }
}
```

### 接口实现

类可以通过 `implements` 实现接口，必须包含接口中定义的所有成员。

```ts
interface Serializable {
  serialize(): string;
}

class User implements Serializable {
  constructor(public name: string) {}

  serialize(): string {
    return JSON.stringify({ name: this.name });
  }
}
```

一个类可以同时实现多个接口，也可以继承父类并实现接口。

```ts
class Base {}

class User extends Base implements Serializable {
  serialize(): string {
    return '';
  }
}
```

### 静态成员

使用 `static` 定义的属性和方法属于类本身，而不是实例，通过类名直接访问。

```ts
class Person {
  static count = 0;

  static create(): Person {
    Person.count++;
    return new Person();
  }
}

Person.count;
Person.create();
```

## 7. 泛型

泛型（`Generics`）用来在定义函数、接口、类时不预先指定具体类型，而是在使用时再确定类型，从而在复用逻辑的同时保留类型信息。

### 泛型函数

在函数名后使用 `<T>` 声明类型参数，`T` 只是一个占位符，调用时由传入的参数推断或手动指定。

```ts
// T 为类型参数，调用时由传入的参数推断
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello'); // 手动指定为 string
identity(123); // 自动推断为 number
```

多个类型参数时用逗号分隔：

```ts
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

pair('a', 1); // [string, number]
```

### 泛型接口

类型参数定义在接口名之后，使用时再传入具体类型。

```ts
interface Result<T> {
  code: number;
  data: T;
  message: string;
}

// 指定 data 为 User 类型
interface User {
  name: string;
}

const res: Result<User> = {
  code: 200,
  data: { name: '张三' },
  message: 'ok',
};
```

### 泛型类

类型参数定义在类名之后，作用域为整个类。

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.pop(); // number | undefined
```

### 泛型约束

使用 `extends` 对类型参数进行约束，限制传入的类型必须满足某些条件。

```ts
// 约束 T 必须拥有 length 属性
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

getLength('hello'); // 字符串有 length
getLength([1, 2, 3]); // 数组有 length
// getLength(123); // 报错：number 没有 length
```

结合 `keyof` 约束对象的属性名，保证访问的属性一定存在：

```ts
// K 必须是 T 的键之一
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: '张三', age: 18 };
getValue(user, 'name'); // string
// getValue(user, 'sex'); // 报错：'sex' 不是 user 的键
```

### 泛型默认值

类型参数可以设置默认值，未指定时使用默认类型。

```ts
interface Result<T = any> {
  code: number;
  data: T;
}

const res1: Result = { code: 200, data: '任意类型' };
const res2: Result<string> = { code: 200, data: 'hello' };
```

## 8. 声明文件

声明文件以 `.d.ts` 结尾，只包含类型声明、不包含具体实现，用于为 `JavaScript` 代码或第三方库提供类型信息，编译后不会生成 `js` 代码。

### declare 声明

使用 `declare` 描述已经存在的变量、函数、类等，告诉 `TypeScript` 它们的存在和类型。

```ts
// 声明全局变量
declare const VERSION: string;

// 声明全局函数
declare function greet(name: string): void;

// 声明全局类
declare class Animal {
  name: string;
  constructor(name: string);
  move(): void;
}

// 声明命名空间
declare namespace MyLib {
  function show(): void;
}
```

### 声明模块

当引入的第三方库没有类型声明时，可以用 `declare module` 为其补充类型。

```ts
// 有具体类型
declare module 'my-lib' {
  export function sum(a: number, b: number): number;
}

// 无法确定类型时，使用通配符，避免导入报错
declare module '*.css';
declare module '*.png' {
  const src: string;
  export default src;
}
```

### 扩展已有模块

使用 `declare module` 配合导入可以给已有模块扩展类型，例如给 `vue` 扩展全局属性：

```ts
// 扩展 vue 模块的 ComponentCustomProperties
import 'vue';

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios;
  }
}

export {};
```

### 扩展全局

在模块文件中使用 `declare global` 可以向全局作用域添加类型声明。

```ts
export {};

declare global {
  interface Window {
    __APP_VERSION__: string;
  }

  const __DEV__: boolean;
}
```

### 三斜线指令

声明文件顶部可以使用三斜线指令引用其他声明文件或依赖的 `@types` 包。

```ts
/// <reference types="node" />
/// <reference path="./global.d.ts" />
```

### 类型声明来源

- 库自带：在 `package.json` 的 `types` / `typings` 字段中指定，或在包内提供 `index.d.ts`
- 社区维护：通过 `npm install -D @types/包名` 安装，如 `@types/node`、`@types/lodash`
- 自行编写：项目根目录或 `types` 目录下新建 `xxx.d.ts`，并确保被 `tsconfig.json` 的 `include` 覆盖

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["node", "vite/client"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"]
}
```
