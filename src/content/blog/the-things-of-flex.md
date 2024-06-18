---
title: Flex 布局那点事
description: 布局其实是前端非常重要的能力，也是最基础的，但是他的重要性却时常被忽略，特别是 Flex 布局，非常方便，绝大多人数都使用过，系统了解过 Flex 布局的人却不是很多。
publishDate: 2021-08-09
modifyDate: 2021-08-09
---

布局其实是前端非常重要的能力，也是最基础的，但是它的重要性却时常被忽略，特别是 Flex 布局，非常方便，绝大多人数都使用过，系统了解过 Flex 布局的人却不是很多。 有时候使用 Flex 效果有点莫名其妙，而开发者却无所从手，不停测试新的属性，希望能达到预期效果，一来这种做法效率低，二来自己不知所以的加了一堆样式，导致样式臃肿，三来不利于积攒经验，当后面遇到同样问题，还得再试一遍，所以全面学习一下，划得来。

## 什么是 Flexbox 布局。

CSS3 带来的高效排列、对齐和分配空间的布局模型。

1. Flex 容器：设置 dom 节点 display: flex 或者 dispaly: inline-flex 自动开启 Flexbox 布局模式。
2. Flex 元素： Flex 容器的子节点自动转换为 Flex 元素。

## Flex 容器属性

`Flex-direction` `Flex-wrap` `Justify-content` `Align-items` `Align-content`

Flex 容器属性主要是用来设置 Flex 元素排列，对齐方式，它有2个方法的排列方式，横轴和纵轴。


![main axis](/img/flex.png)

**1. Flex-direction**

设置 Flex 元素的排列方向：按列排、按行排、倒列排、倒行排，默认是 row。

```css
ul {
  flex-direction: row || column || row-reverse || column-reverse;
}
```

**2. Flex-wrap**

设置 Flex 元素是否换行，默认是 wrap。

```css
ul {
  flex-wrap: wrap || no-wrap;
}
```

**3. Justify-content**

设置 Flex元素横轴方向的排列样式，默认是 flex-start。

```css
ul {
  justify-content: flex-start || flex-end || center || space-between ||space-around;
}
```

**4. Align-items**

设置 Flex 元素纵轴方向的排列样式，默认是 stretch。

```css
ul {
  align-items: flex-start || flex-end || center || stretch || baseline;
}
```

**5. Align-content**

和 `align-items` 类似，只不过，`align-content` 是用于控制 Flex 元素出现多行时纵轴方法的样式，默认是 stretch。


## Flex 元素属性
`Order || Flex-grow || Flex-shrink || Flex-basis`

> flex 是简写属性 felx: flex-grow flex-shrink flex-basis，flex 元素默认属性是 flex: 0 1 auto; 所以默认样式下 flex 元素的大小是跟随其内容自适应的，不会配置额外剩余空间，当默认宽度小于容器宽度时会收缩（这一点非常重要，即使指定了 flex 元素宽度，它也会收缩）。

**1. Order**

用来排列 Flex 元素的顺序有点类似于 z-index，默认值是 0，排序是按 dom 节点先后位置排列。

```css
li:nth-child(1) {
  order: 1;  /* 默认nth-child 默认下标是 0， 所以现在第二个 li 节点在页面中的视觉位置排在第一*/
}
```

**2. Flex-grow**

设置 Flex 元素在 flex 容器中分配剩余空间的相对比例，默认值是 0。

**剩余空间：** flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配。

**2. Flex-shrink**

设置 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，默认值是 1，0 表示关闭收缩功能。

**3. Flex-basis**

 设置 Flex 元素在主轴方向上的初始大小，默认值为 `auto`。flex-basis 的值和 width 属性的值 + content 类型值`max-content || min-content || fit-content`。

 > flex-basis 比 width 或者 height（当 flex-direction: column时，flex-basis 的值相当于 height） 有更高的优先级

**4. Align-self**

同 Flex 容器属性的 `align-items` 属性，只不过这里知识针对单个 Flex 元素。

## relative Flex 元素和 absolute Flex 元素


- **relative Flex 元素：** relative flex 元素的宽度由他们的内容决定或者是固定值。
- **absolute Flex 元素：** absolute flex 元素的宽度是弹性的。

> flex-grow、Flex-shrink、Flex-basis 配合可以简洁实现复杂的页面布局，比如典型的3栏布局。使用flex 非常简单。

## margin: auto 在 Flex 布局中的特殊应用


当 margin:auto 用在 Flex 元素上时，auto 属性的方向（left, right or both）将会自动占据剩余空间。这个特性用在导航栏的布局上十分简洁。<a href="https://tailwindcss.com/docs" target="_blank" title="访问 tailwind.css">tailwind.css</a>导航栏就是这样布局的，连 html 结构都简单一点。


## 总结

随着像`unocss`, `tailwindw.css` 这样的原子化 css 框架的使用，写样式越来越简单，但是如果对样式本身不了解，使用起来的效果就大打折扣了。


