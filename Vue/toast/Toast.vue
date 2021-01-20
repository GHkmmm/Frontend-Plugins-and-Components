<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
    name: 'Toast',
    data(){
        return{
            isShow: false,
            message: ''
        }
    },
    methods: {
        show(message='默认文字', duration=2000){
            this.isShow= true;
            this.message= message;
            setTimeout(()=>{
                this.isShow= false;
                this.message= ''
            }, duration)
        }
    }
}
</script>

<style scoped>
.toast{
    width: 248px;
    line-height: 25px;

    color: #fff;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 10;
    font-size: 14px;

    background: #000000;
    border-radius: 7px;
    opacity: 0.63;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>