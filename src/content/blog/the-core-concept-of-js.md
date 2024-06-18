---
title: Javascript 相关的核心概念
description: 前端的基石 Javascript 非常重要，对 Javascript 的理解深度决定了前端生涯能够达到的高度以及后续技术栈拓展的顺畅度。
publishDate: 2022-03-09
modifyDate: 2022-03-09
---

前端的基石 Javascript 非常重要，对 Javascript 的理解深度决定了前端生涯能够达到的高度以及后续技术栈拓展的顺畅度。

## Javascript 运行时

JS 运行时是执行 Javascript 代码的环境，所有的浏览器、Node.js 都是 Javascript 运行时，除了 Javascript 引擎，Javascript 运行时还包括 Dom API, 异步任务管理，网络处理库等...

## Javascirpt 引擎

JS 运行时的核心组件，主要负责执行 Javascript 代码， 包括以下职责

- **解析(parsing):** 解析文本为抽象语法树（ast）。
- **字节码生成:** 将解析后的 AST 会被转换为字节码（字节码是一种较低级的表示形式，但仍然不是直接的机器码。它是虚拟机：如 JavaScript 引擎可以理解和执行的代码）或者直接生成机器码。
- **解释执行或即时编译：** JavaScript 引擎（如 Google 的 V8、Mozilla 的 SpiderMonkey）可以解释执行字节码，或将字节码进一步编译为机器码。JIT（Just-In-Time）编译器在运行时将频繁执行的字节码片段编译为高效的机器码，以提升性能。
热点代码（频繁执行的代码）会被识别并优化，生成高效的机器码

**注：** 解释执行 Javascirpt 代码主要包括2个阶段：创建阶段和执行阶段。创建阶段包括为变量、函数声明建立内存空间，创建作用域链，this关键字，执行阶段则是一行一行执行代码。

## 执行上下文 （execution context）

执行上下文是一个抽象概念，表示 JS 代码执行时的环境信息，包括执行代码所必需的变量、函数、作用域链、this的值等。

## 执行栈 （call stack）

执行栈(call stack)也叫 execution stack,用于跟踪嵌套函数调用和保存函数调用所生成的执行上下文。执行上下文分为分为全局执行上下文（global execution context）和函数执行上下文（function execution context）。

- **全局执行上下文（global execution context）**

  > **当 JS 引擎执行顶层代码时创建，JS 引擎执行代码分为2个阶段：**

  1. creaton 阶段: 包括创建全局对象、创建 this 对象、为变量和函数定义分配存储空间、为变量声明分配默认值、设置函数申明的内存引用地址。
  2. execution 阶段: 逐行执行代码。

- **函数执行上下文 (Function execution context)**

  > 当某个函数调用时创建，基本上和全局执行上下文相同，但是在 creaton 阶段，它不会创建全局对象，全局对象只有一个，反而创建 arguments object。这些创建的上下文保存在执行栈（call stack） 中，当函数执行结束时，该函数执行上下文将从 call stack 中弹出（pop out）

## 事件循环 （event loop）

Javascript 运行时提供的核心组件和 Javascript 引擎一起工作，负责管理调度异步任务的顺序。一般事件循环通过任务队列（task queue）和微任务队列（microtask queue）来实现任务调度。

- **任务队列（callback queue）：** 保存等待执行的异步回调，当某个异步任务完成时，与之相关的回调将添加到任务队列中。
- **微任务队列(microtask queue)：** 微任务比一般任务具有更高的优先级，microtask 由 Promise 的 resolve、reject、finally、mutationOberve、nextTick 等产生。

调度规则

**1.** 检查 call stack 是否为空。

**2.** 当 callstack 为空时，先执行微任务队列中任务。

**3.** 当微任务队列为空且 call stack 为空，则依次执行任务队列中的任务

## 作用域链

每一段 JS 代码（顶层代码或函数）都有一个与之关联的作用域链，它是一个对象列表或链表。列表或链表中的对象包括了程序源代码（顶层代码或函数）中的变量、函数定义和函数参数。

当定义一个函数时，它实际上保存了一个作用域链，当调用该函数时，它创建一个新的对象来存储它的局部变量（代码段中变量、函数定义、函数参数）并将这个对象添加到该函数的作用域链中。所以顶层代码段作用域链由一个全局对象组成，不包含嵌套的函数体中，作用域链上有2个对象。

**块级作用域：** 当 javascript 引擎遇到一个块级作用域时，它会创建一个新的词法环境（记录let、const 申明的变量）并将其添加到作用域链顶部，当块级代码段执行结束后，块级词法环境被移除，作用域链恢复到之前的状态。块级作用域通过新的词法环境和动态作用域链来实现。

## this 关键字

creation 阶段生成，this指向 5条黄金法则：

**1.默认绑定：** 默认指向 window 或严格模式下 undefined。

**2.隐式绑定：** 通过对象的方法调用，指向该对象。

**3.显式绑定：** 通过 bind、call、apply 指定。

**4.new 关键字：** 指向新生成的对象。

**5.词法绑定：** ES6中箭头函数，this 同父级 this。

其中显式绑定可以利用隐式绑定的机制来自定义实现:

```javascript
Function.prototype.call = function(context, ...args) {
  const context.fn = this
  const result = ccontext.fn(..args)
  delete context.fn 
  return result
}
```

## 原型继承

## 模块（esm）