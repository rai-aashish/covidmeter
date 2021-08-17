<template>
  <div class="about">
    <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    >
    <h1>About application</h1>
    </transition>

   <div class="contents">
     This project is developed to get statistics regarding cases of severe acute respiratory syndrome coronavirus 2" (SARS-CoV-2) A.K.A COVID-19.
   </div> 
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
.about{
  color:$secondary;

  h1{
    color:$primary;
    text-shadow: 2px 1px 2px rgba(255, 255, 255, 0.9);
  }

  .contents{
    font-size: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    margin-top:10px;
  }
}

</style>
