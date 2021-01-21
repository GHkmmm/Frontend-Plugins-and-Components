## 使用方式



#### main.js

```js
import loading from 'path/loading'

Vue.use(loading)
```



#### 组件中使用

```js
/**
* 也可统一在axios中配置
* 请求拦截器中使用this.$loading.show()
* 响应拦截器中this.$loading.finished()
**/
this.$loading.show() // 显示loading组件
this.$loading.finished() // 关闭loading组件
```

