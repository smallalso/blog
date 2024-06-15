---
title: 中间件模式在前端业务开发中的应用
description: 中间件（Middleware）并不是传统意义上的设计模式（Design Pattern），但它是一种重要的软件设计概念，中间件的作用通常是连接不同的软件组件或应用程序，提供通用服务和功能。
publishDate: 2023-05-02
modifyDate: 2023-05-02
---

chatGPT：中间件（Middleware）并不是传统意义上的设计模式（Design Pattern），但它是一种重要的软件设计理念，中间件的作用通常是连接不同的软件组件或应用程序，提供通用服务和功能。

## 前端里的中间件

中间件的概念是连接不同的软件组件或应用程序，在前端领域中间件一般指提供通用独立功能的数据处理函数，这些功能函数链接在一起，形成队列后依次执行。通过中间件概念，代码结构更清晰，更易复用和维护。

- **HTTP 请求处理：** 中间件可以用于认证和授权、日志记录、请求解析和错误处理等任务，使代码结构清晰、职责分明。
- **状态管理：** 通过中间件处理异步操作、日志记录和错误报告，增强应用的可维护性和可调试性。
- **请求拦截和数据处理：** 在 HTTP 客户端库中使用中间件拦截请求和响应，统一处理认证、数据转换和错误处理。
- **路由和导航：** 在路由框架中使用中间件保护路由、处理重定向等，确保应用导航的安全性和一致性。
- **数据流处理：** 在 Node.js 中处理流数据时，通过中间件逐步处理数据，实现复杂的数据转换和处理逻辑。

前端中间件中比较常用的就是模式就是带有 next 方式入参的函数。下面以 koa 为例。

```javascript
new Koa()
  .use(async (ctx, next) => {
    console.log('begin:1');
    await next();
    console.log('end:1');
  })
  .use(async (ctx, next) => {
    console.log('begin: 2');
    await next();
    console.log('end: 2');
  });
```

**注：** Koa 默认支持异步函数，典型按照洋葱圈模型的顺序调用，Express.js 类似，只不过 next 方式是同步调用。


## 如何在业务中参照使用

以上是在一些三方库中应用的案例，那么如果在实际的业务中遇到复杂流程（流程较多且每个流程直接较为独立）就可以参考这种方式来组织代码。我近几年一直在负责医院院内 sass 系统的开发，其中收费、退费、票据打印就特别适合这种模式。

简单退费流程（非实际医院业务，实际业务更复杂）

```mermaid
  预退费 → 退医保 → 部分退、医保重收 → 退自费部分 → 退费确认
```


我见到类似这样的实现，完全面条式的，其中夹杂着各种 callback 结果是随着业务逻辑的增加，代码越来越难以维护。
```javascript
function a (params) {
  if () {
    b(params)
  } else {
    c(params)
  }
}

function c () {
  if () {
    e()
  }
}
function d () {
  e()
}
function e () {
  if () {
    c()
  }
}
```

应用中间件概念，这种使用方式本身就有提醒开发者将功能业务划分得更清楚的魔力。

```javascript
class middleExe {
  private index: number
  public middleWares: KoaMiddleWare[]
  public ctx: Context
  constructor() {
    this.index = 0
    this.middleWares = []
    this.ctx = {}
  }

  public add(middleWare: KoaMiddleWare) {
    this.middleWares.push(middleWare)
    return this
  }

  public async next() {
    if (this.index < this.middleWares.length) {
      // 这里使用 await 就可以保证等到所有中间件都执行完后再结束 next 方法，从而实现洋葱圈式的调用顺序
      await this.middleWares[this.index++](this.ctx, this.next.bind(this))
    }
  }

  public async start() {
    await this.next()
    console.log(this.ctx)
  }
}

const refundProcess = new middleExe()
// 预退费
refundProcess.add((ctx, next) => {
  // do something
  await next()
  // do something
})
// ... 其他流程
refundProcess.start()
```

