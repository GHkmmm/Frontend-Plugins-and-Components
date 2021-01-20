<template>
  <div class="loading" v-show="isShow">
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      width="10vw" height="10vw" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
      <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</template>

<script>
export default {
    name: 'Toast',
    data(){
      return{
        isShow: false
      }
    },
    methods: {
      show(){
        this.isShow = true
      },
      finished() {
        this.isShow = false
      }
    }
}
</script>

<style scoped>
.loading{
  width: 80px;
  height: 80px;
  background-color: #fff;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 10;
  line-height: 30px;
  border-radius: 15px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
}
.loader{
  margin: auto;
  height: 100px;
  width: 20%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: inline-block;
  vertical-align: top;
}
svg path,
svg rect{
  fill: #409EFF;
}
</style>