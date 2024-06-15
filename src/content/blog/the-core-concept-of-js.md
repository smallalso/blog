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

**注：** 解释执行 Javascirpt 代码主要包括2个阶段：创建阶段和执行阶段。创建阶段包括为变量、函数声明建立内存空间，创建作用域链，执行阶段则是一行一行执行代码。

## 执行上下文 （execution context）

执行上下文是一个抽象概念，表示 JS 代码执行时的环境信息，包括执行代码所必需的变量、函数、作用域链、this的值等。

## 执行栈 （call stack）

执行栈(call stack)也叫 execution stack,用于跟踪嵌套函数调用和保存函数调用所生成的执行上下文。执行上下文

## 事件循环 （event loop）

Javascript 运行时提供的核心组件和 Javascript 引擎一起工作，负责管理调度异步任务的顺序。一般事件循环通过任务队列（task queue）和微任务队列（microtask queue）来实现任务调度。

- **任务队列（callback queue）：** 保存等待执行的异步回调，当某个异步任务完成时，与之相关的回调将添加到任务队列中。
- **微任务队列(microtask queue)：** 微任务比一般任务具有更高的优先级，microtask 由 Promise 的 resolve、reject、finally、mutationOberve、nextTick 等产生。

调度规则

1. 检查 call stack


## 作用域链

## this 关键字

## 原型继承

## 模块（esm）