import Loading from './Loading.vue';

const obj= {}

//main.js中Vue.use(obj)默认调用obj的install方法 
//默认传入vue对象 无需再import vue 
/**
 * main.js中的使用
 * 
 * import loading from './components/loading'
 * Vue.use(loading)
 * 
 * 组件中使用（可统一在axios中配置）
 * this.$loading.show() // 显示loading组件
 * this.$loading.finished() // 关闭loading组件
 */
obj.install= function(Vue){
    //1.创建组件构造器
    const loadingConstructor= Vue.extend(Loading)

    //2.创建一个组件对象
    const loading= new loadingConstructor()

    //3.将loading手动挂载到div上
    loading.$mount(document.createElement('div'))

    document.body.appendChild(loading.$el)

    Vue.prototype.$loading= loading
}

export default obj