<template>
  <div class="about">
       <button v-on:click="titleShow= !titleShow">click</button>
  {{titleShow}}
      

  </div>
    <!-- <transition
    appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
  >
     <h1 v-if="titleShow">This is an about page</h1>
  </transition> -->

  <table>
     <transition-group
     appear
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-bind:css="false"
    
    >

    <tr v-show="titleShow" v-for="(item,index) in items" :key="item" :data-index="index">
      <td>{{item}}</td><td>{{index}}-{{item}}</td>
    </tr>
 
     </transition-group>
  </table>
</template>
<script>

import gsap from 'gsap'

export default{
  data(){
    return{
        titleShow:true,
       items: ["contact","upesh","kalyan","vue","react","three"],
    }
  },
    methods: {
    beforeEnter: function (el) {
      console.log('before-enter')
      el.style.opacity = 0
      el.style.transform = 'translateX(100px)'
    },
    enter: function (el, done) {
     
     gsap.to(el,{
        opacity:1,
        x:0,
        duration:.3,
        delay:  el.dataset.index*0.2,
        onComplete:done
      })
       console.log('enter')
    },
    beforeLeave: function(el) {
      console.log('before leave ')
      el.style.opacity=1
      

    },
    
     leave: function (el, done) {  

        
     gsap.to(el,{
        opacity:0,
        x:80,
        duration:1,
        delay:  (9-el.dataset.index)*0.2,
        onComplete:done
      })
      console.log('leave complete',self.counter)
      
    },
    
    
  }

}
</script>

<style lang="scss" scoped>


table{
width:200px;
border-collapse: separate;
border-spacing: 5px;
margin:auto;
}
table tr{
  background-color: blueviolet;
  color:#fff;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
