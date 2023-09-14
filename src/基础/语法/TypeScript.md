---
title: TypeScript
date: 2022-02-16 17:36:02
order: 2
category:
  - 前端
  - 学习笔记
tag:
  - TypeScript
---

# TypeScript

## 介绍

`TypeScript` 是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。

`TypeScript` 不能直接在浏览器运行，需要编译成 `JavaScript`。

`TypeScript` 扩展了 `JavaScript` 的语法，所以任何现有的 `JavaScript` 程序可以运行在 `TypeScript` 环境中。

## 特点

+ 始于 `JavaScript` ，归于 `JavaScript`

`TypeScript` 可以编译出纯净、 简洁的 `JavaScript` 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的 `JavaScript` 引擎中。

+ 强大的类型系统

`TypeScript` 增加了代码的可读性和可维护性，可以在编译阶段就发现大部分错误，这总比在运行时候出错好，增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

+ 先进的 JavaScript

`TypeScript` 提供最新的和不断发展的 `JavaScript` 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件。

## 安装 TypeScript

命令行运行

``` sh
npm install typescript -g
```

检测是否安装成功

``` sh
tsc -V
```

## 第一个 TypeScript 程序

``` ts
function hello(str: string) {
  return `hello${str}`;
}
console.log(hello('world'));
```

`TypeScript` 无法直接在浏览器运行，需要编译成 `JavaScript`

命令行执行

``` sh
tsc 'ts文件目录'
```

会在同级目录生成同名 js 文件

``` js
(function () {
    function hello(str) {
        return "hello" + str;
    }
    console.log(hello('world'));
})();

```

## 类型注解

类型注解是一种轻量级的为函数或者变量添加的约束

例如，希望 `hello` 函数接收一个 `string` 类型的传参，但尝试传入 `number` 的参数

``` ts
function hello(str: string) {
  return `hello${str}`
}
console.log(hello(1))
```

重新编译会看到报错

``` sh
- error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
```

`TypeScript` 提供了静态的代码分析，它可以分析代码结构和提供的类型注解。

::: warning
尽管编译错误，但对应的 `js` 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 `TypeScript` 。但在这种情况下， `TypeScript` 会警告你代码可能不会按预期执行。
:::

## 基础类型

`TypeScript` 支持与 `JavaScript` 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。

### 布尔值

最基本的数据类型，值为 true/false，在 TypeTypeScript 和 JavaScript 中交组 `boolean` (其他语音中也一样)

``` ts
let isDone: boolean = false;
isDone = true;
```

### 数字

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。 这些浮点数的类型是 `number`。 除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015中引入的二进制和八进制字面量。

``` ts
const n1: number = 10 // 十进制
const n2: number = 0b1010  // 二进制
const n3: number = 0o12 // 八进制
const n4: number = 0xa // 十六进制
```

### 字符串

JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 `string` 表示文本数据类型。 和 JavaScript 一样，可以使用双引号（"）或单引号（'）表示字符串。

``` ts
const str: string = 'is string'
```

### undefined 和 null

TypeScript 里， `undefined` 和 `null` 两者各自有自己的类型分别叫做 `undefined` 和 `null` 。 它们的本身的类型用处不是很大

``` ts
let u: undefined = undefined
let n: null = null
```

### 数组

TypeScript 像 JavaScript 一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：

``` ts
let list1: number[] = [1, 2, 3]
```

第二种方式是使用数组泛型，Array<元素类型>：

``` ts
let list2: Array<number> = [1, 2, 3]
```

### 元组 Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string 和 number 类型的元组。

``` ts
let t1: [string, number]
t1 = ['hello', 10] // OK
t1 = [10, 'hello'] // Error
```

当访问一个已知索引的元素，会得到正确的类型：

``` ts
console.log(t1[0].substring(1)) // OK
console.log(t1[1].substring(1)) // Error, 'number' 不存在 'substring' 方法
```

### 枚举

`enum` 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。

``` ts
enum Color { Red, Green, Blue }

// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
const myColor: Color = Color
```

默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号：

``` ts
enum Color {Red = 1, Green, Blue}
const myColor: Color = Color
```

或者，全部都采用手动赋值：

``` ts
enum Color {Red = 1, Green = 2, Blue = 4}
const myColor: Color = Color
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

``` ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]

console.log(colorName)  // 'Green'
```

### any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 `any` 类型来标记这些变量：

``` ts
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean
```

### void

某种程度上来说， `void` 类型像是与 `any` 类型相反，它表示`没有任何类型`。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void` ：

``` ts
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
  console.log('fn()')
  // return undefined
  // return null
  // return 1 // error
}
```

声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null：

``` ts
let unusable: void = undefined
```

### object

`object` 表示非原始类型，也就是除 `number`，`string`，`boolean`之外的类型。

使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 API。例如：

``` ts
function fn2(obj:object):object {
  console.log('fn2()', obj)
  return {}
  // return undefined
  // return null
}
console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))
```

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种

``` ts
function toString2(x: number | string) : string {
  return x.toString()
}
```

### 类型断言

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法, 另一个为 as 语法

``` ts
/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/

/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
  if ((<string>x).length) {
    return (x as string).length
  } else {
    return x.toString().length
  }
}
console.log(getLength('abcd'), getLength(1234))
```

### 类型推断

类型推断: TS会在没有明确的指定类型的时候推测出一个类型
有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

``` ts
/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'
```

## 接口（interface）

`TypeScript` 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口来定义对象的类型

### 介绍

在 `TypeScript` 中，使用 `interface` 定义接口

``` ts
interface IUser {
  id: number
  name: string
}

const user: IUser = {
  id: 1,
  name: '用户1'
}
```

类型检查器会查看对象内部的属性是否与IPerson接口描述一致, 如果不一致就会提示类型错误。

### 可选属性

接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。

``` ts
interface IUser {
  id: number
  name: string
  age?: number
}
```

带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 `?` 符号。

### 只读属性

一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 `readonly` 来指定只读属性。

``` ts
interface IUser {
  readonly id: number
  name: string
  age?: number
}
```

一旦赋值后再也不能被改变了。

### 函数类型

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

``` ts
interface IFunc {
  (str1: string, str2: string): boolean
}

const func: IFunc = (str1, str2): boolean => {
  return str1 === str2
}

func('abc', 'abc')
```

### 类类型

与 `C#` 或 `Java` 里接口的基本作用一样， `TypeScript` 也能够用它来明确的强制一个类去符合某种契约。

``` ts
interface Alarm {
  alert(): any;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm {
  alert() {
      console.log('Car alert');
  }
}
```

### 接口继承

接口可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

``` ts
interface IA {
  a: any
}

interface IB extends IA {
  b: any
}
```

## 类（class）

对于传统的 `JavaScript` 程序我们会使用`函数`和`基于原型的继承`来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是`基于类的继承`并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 `TypeScript` ，我们允许开发者现在就使用这些特性，并且编译后的 `JavaScript` 可以在所有主流浏览器和平台上运行，而不需要等到下个 `JavaScript` 版本。

### 介绍

在 `TypeScript` 中，使用 `class` 定义类

``` ts
class Greeter {
  // 声明属性
  message: string

  // 构造方法
  constructor (message: string) {
    this.message = message
  }

  // 一般方法
  greet (): string {
    return 'Hello ' + this.message
  }
}

// 创建类的实例
const greeter = new Greeter('world')
// 调用实例的方法
console.log(greeter.greet())
```

### 继承

在 `TypeScript` 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用`继承`来扩展现有的类。

``` ts
class Animal {
  run (distance: number) {
    console.log(`Animal run ${distance}m`)
  }
}

class Dog extends Animal {
  cry () {
    console.log('wang! wang!')
  }
}

const dog = new Dog()
dog.cry() 
dog.run(100) // 可以调用从父中继承得到的方法
```

### 公用，私有，受保护

访问修饰符: 用来描述类内部的属性/方法的可访问性

+ public: 默认值, 公开的外部也可以访问
+ private: 只能类内部可以访问
+ protected: 类内部和子类可以访问


``` ts
class Animal {
  public name: string

  public constructor (name: string) {
    this.name = name
  }

  public run (distance: number=0) {
    console.log(`${this.name} run ${distance}m`)
  }
}

class Person extends Animal {
  private age: number = 18
  protected sex: string = '男'

  run (distance: number=5) {
    console.log('Person jumping...')
    super.run(distance)
  }
}

class Student extends Person {
  run (distance: number=6) {
    console.log('Student jumping...')

    console.log(this.sex) // 子类能看到父类中受保护的成员
    // console.log(this.age) //  子类看不到父类中私有的成员

    super.run(distance)
  }
}

console.log(new Person('abc').name) // 公开的可见
// console.log(new Person('abc').sex) // 受保护的不可见
// console.log(new Person('abc').age) //  私有的不可见
```

### readonly 修饰符

可以使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

``` ts
class Person {
  readonly name: string = 'abc'
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person('John')
// john.name = 'peter' // error
```

### 存取器

`TypeScript` 支持通过 `getters/setters` 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

``` ts
class Person {
  firstName: string = 'A'
  lastName: string = 'B'
  get fullName () {
    return this.firstName + '-' + this.lastName
  }
  set fullName (value) {
    const names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

const p = new Person()
console.log(p.fullName)

p.firstName = 'C'
p.lastName =  'D'
console.log(p.fullName)

p.fullName = 'E-F'
console.log(p.firstName, p.lastName)
```

### 静态属性

也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。

``` ts
class Person {
  name1: string = 'A'
  static name2: string = 'B'
}

console.log(Person.name2)
console.log(new Person().name1)
```

### 抽象类

抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 `abstract` 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

``` ts
/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法
*/

abstract class Animal {

  abstract cry ()

  run () {
    console.log('run()')
  }
}

class Dog extends Animal {
  cry () {
    console.log(' Dog cry()')
  }
}

const dog = new Dog()
dog.cry()
dog.run()
```

## implements与extends的区别

### implements

实现，一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

### extends

继承，一个新的接口或者类，从父类或者接口继承所有的属性和方法，不可以重写属性，但可以重写方法

## 函数

函数是 JavaScript 应用程序的基础，它帮助你实现抽象层，模拟类，信息隐藏和模块。在 TypeScript 里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。TypeScript 为 JavaScript 函数添加了额外的功能，让我们可以更容易地使用。

### 基本示例

和 JavaScript 一样，TypeScript 函数可以创建有名字的函数和匿名函数。你可以随意选择适合应用程序的方式，不论是定义一系列 API 函数还是只使用一次的函数。

通过下面的例子可以迅速回想起这两种 JavaScript 中的函数：

``` ts
function add(x, y) {
  return x + y
}
console.log(3, 4)
```

### 函数类型

我们可以给每个参数添加类型之后再为函数本身添加返回值类型。TypeScript 能够根据返回语句自动推断出返回值类型。

``` ts
function add(x: number, y: number): number {
  return x + y
}
```

### 可选参数和默认参数

TypeScript 里的每个函数参数都是必须的。 这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。

JavaScript 里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是 undefined。 在TypeScript 里我们可以在参数名旁使用 ? 实现可选参数的功能。 比如，我们想让 lastName 是可选的：

在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 undefined 时。 它们叫做有默认初始化值的参数。

``` ts
function buildName(firstName: string = 'A', lastName?: string): string {
  if (lastName) {
    return firstName + '-' + lastName
  } else {
    return firstName
  }
}

console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())
```

### 函数重载

函数重载: 函数名相同, 而形参不同的多个函数
在JS中, 由于弱类型的特点和形参与实参可以不匹配, 是没有函数重载这一说的 但在TS中, 与其它面向对象的语言(如Java)就存在此语法

``` ts
/* 
函数重载: 函数名相同, 而形参不同的多个函数
需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
*/

// 重载函数声明
function add (x: string, y: string): string
function add (x: number, y: number): number

// 定义函数实现
function add(x: string | number, y: string | number): string | number {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}

console.log(add(1, 2))
console.log(add('a', 'b'))
// console.log(add(1, 'a')) // error
```

## 泛型

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

### 引入

下面创建一个函数, 实现功能: 根据指定的数量 count 和数据 value , 创建一个包含 count 个 value 的数组 不用泛型的话，这个函数可能是下面这样：

``` ts
function createArray(value: any, count: number): any[] {
  const arr: any[] = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}

const arr1 = createArray(11, 3)
const arr2 = createArray('aa', 3)
console.log(arr1[0].toFixed(), arr2[0].split(''))
```

### 使用函数泛型

``` ts
function createArray2 <T> (value: T, count: number) {
  const arr: Array<T> = []
  for (let index = 0; index < count; index++) {
    arr.push(value)
  }
  return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error
```

### 多个泛型参数的函数

一个函数可以定义多个泛型参数

``` ts
function swap <K, V> (a: K, b: V): [K, V] {
  return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log(result[0].length, result[1].toFixed())
```

### 泛型接口

在定义接口时, 为接口中的属性或方法定义泛型类型
在使用接口时, 再指定具体的泛型类型

``` ts
interface IbaseCRUD <T> {
  data: T[]
  add: (t: T) => void
  getById: (id: number) => T
}
class User {
  id?: number; //id主键自增
  name: string; //姓名
  age: number; //年龄

  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

class UserCRUD implements IbaseCRUD <User> {
  data: User[] = []
  
  add(user: User): void {
    user = {...user, id: Date.now()}
    this.data.push(user)
    console.log('保存user', user.id)
  }

  getById(id: number): User {
    return this.data.find(item => item.id===id)
  }
}


const userCRUD = new UserCRUD()
userCRUD.add(new User('tom', 12))
userCRUD.add(new User('tom2', 13))
console.log(userCRUD.data)
```

### 泛型类

在定义类时, 为类中的属性或方法定义泛型类型 在创建类的实例时, 再指定特定的泛型类型

``` ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y 
}

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = 'abc'
myGenericString.add = function(x, y) { 
  return x + y
}

console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
```

### 泛型约束

如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性

``` ts
// 没有泛型约束
function fn <T>(x: T): void {
  // console.log(x.length)  // error
}
```

我们可以使用泛型约束来实现

``` ts
interface Lengthwise {
  length: number;
}

// 指定泛型约束
function fn2 <T extends Lengthwise>(x: T): void {
  console.log(x.length)
}
```

我们需要传入符合约束类型的值，必须包含必须 length 属性：

``` ts
fn2('abc')
// fn2(123) // error  number没有length属性
```

## 其他

### 声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能

什么是声明语句

假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 `<script>` 标签引入 jQuery，然后就可以使用全局变量 $ 或 jQuery 了。

但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西

``` ts
/* 
声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
  declare var jQuery: (selector: string) => any;
声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
下载声明文件: npm install @types/jquery --save-dev
*/

jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
```

这时，我们需要使用 declare var 来定义它的类型

``` ts
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

declare var 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是：

``` ts
jQuery('#foo');
```

一般声明文件都会单独写成一个 xxx.d.ts 文件

创建 01_jQuery.d.ts, 将声明语句定义其中, TS编译器会扫描并加载项目中所有的TS声明文件

``` ts
declare var jQuery: (selector: string) => any;
```

很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 https://www.npmjs.com/package/package 进行搜索

有的第三库在下载时就会自动下载对应的声明文件库(比如: webpack),有的可能需要单独下载(比如jQuery/react)

### 内置对象

JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

1. ECMAScript 的内置对象

> Boolean
> 
> Number
> 
> String
> 
> Date
> 
> RegExp
> 
> Error

2. BOM 和 DOM 的内置对象

> Window
> 
> Document
> 
> HTMLElement
> 
> DocumentFragment
> 
> Event
> 
> NodeList