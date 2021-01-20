## 使用方式



#### main.js

```js
import toast from 'path/toast'

Vue.use(toast)
```



#### 组件中使用

```js
// 第二个参数为toast在页面停留的时间，单位为ms
this.$toast.show('我想提示的文字', 2000)
```

