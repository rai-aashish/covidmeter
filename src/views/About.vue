<template>
  <div class="about">
    <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    >
    <h1 class="test">This is an about page</h1>
    </transition>
  </div>

</template>
<script>

import gsap from 'gsap'

export default{
  data(){
    return{
    }
  },
  setup(){
    const beforeEnter=(el)=>{
       console.log("before enter")
        el.style.opacity=0;
        el.style.transform='translateY(-60px)'

    }

   const enter=(el)=>{
      console.log("enter")
      gsap.to(el,{
        opacity:1,
        y:0,
        duration:1,
        ease:'bounce.out'
      })
    }
 
    const leave=(el)=>{
      console.log("leave")
      gsap.to(el,{
        opacity:0,
        duration:2,
        color:'red',
        y:60

      })
    }

    
    return {beforeEnter,enter,leave}
  },
  
}
</script>

<style lang="scss" scoped>


.test{
  color:$primary
}

.card{
  background-color:$primary;
  color:$secondary;
  width:300px;
  height:300px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: bg;
  animation-duration:1s;
  animation-iteration-count:infinite ;
}
@keyframes bg{
  0% {  background:linear-gradient(to right,aqua,blue)}
  50% {  background:linear-gradient(to right,rgb(0, 132, 255),rgb(0, 119, 255))}
  100% {  background:linear-gradient(to right,aqua,blue)}
}
</style>
