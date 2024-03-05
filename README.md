# jQuery ncAffix.plugin 固钉插件

一个jQuery的固钉插件

## 使用方法：

```html
<div id="test-h-1">
    <div id="t1">t1</div>
    <div id="tx" style="width: 40px;height: 40px;background: #F0F;">tx</div>
</div>
```

```javascript
$('#t1').ncAffix({
    offset: 50,     //相对偏移
    position: 'top',    //top  bottom，二选一 ，向上或向下钉住
    target: '#test-h-1',    // 限制被钉住的对象在某个dom的大小范围内
    zIndex: 100,    // css z-index 属性
    onChange: (e, d) => {
        //当被钉住的对象发生状态改变时触发，e是jQuery选择对象，d是被钉对象是否处于钉住状态
    },
    onScroll: (d) => {
        //当发生滚动时触发，d是滚动的值
    }
})
$('#tx').ncAffix({
    offset: 150,     //相对偏移
    position: 'bottom',    //top  bottom，二选一 ，向上或向下钉住
    target: '#test-h-1',    // 限制被钉住的对象在某个dom的大小范围内
    zIndex: 200,    // css z-index 属性
    onChange: (e, d) => {
        //当被钉住的对象发生状态改变时触发，e是jQuery选择对象，d是被钉对象是否处于钉住状态
    },
    onScroll: (d) => {
        //当发生滚动时触发，d是滚动的值
    }
})
```
