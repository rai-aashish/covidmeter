<template>
  <div id="nav">
    <div class="logo"><span>covid</span>meter</div>

    <transition name="slide-fade">
      <mobileNav v-if="mobileNav" @toggleMobileNav="toggleMobileNav"/>
    </transition>

    <div class="nav-links navigation" v-if="!mobileView">
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link> </li>
        <li><router-link to="/contact">Contacts</router-link></li>
      </ul>

    </div>

     <div class="nav-btn" v-if="mobileView" @click="toggleMobileNav" :class="{mobileNavActive: mobileNav}">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
    </div>
  </div>
  
    <router-view/>


  <div class="footer">
    Developed by Aashish Rai
  </div>
</template>
<script>

import mobileNav from './components/mobileNav.vue'
import gsap from 'gsap'


   export default {
  name: 'Home',
  data(){
    return{
      mobileView : false,
      mobileNav : false,
      windowWidth : null,


    }
  },

  components:{
    mobileNav,

  },
  
  methods:{
      toggleMobileNav(){
          this.mobileNav = !this.mobileNav;
      },
      checkScreen(){
          this.windowWidth = window.innerWidth;
          if(this.windowWidth < 780){
              this.mobileView =  true;
              return;
          }
          else{
              this.mobileView = false;
              this.mobileNav =  false;
              return;
          }
      },

      leave(el){
        gsap.to(el,
        {x:-100,
          duration:0.5,
        })
      }
  },
  created(){
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();

  },

   }
</script>
<style lang="scss">

body{
  background-color: #000;
  
}

a{
  text-decoration: none;
}
*{
  margin:0;
  padding:0;

}
ul{
  list-style: none;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height:100vh;
  color: #2c3e50;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
  //font-family: 'Roboto Condensed', sans-serif;
  
}

#nav {
background-color: $primary;
display:flex;
justify-content: space-between;
align-items: center;
padding:10px;


.logo{
  color:$secondary;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.5px;

  span{
    font-size: 30px;
  }
  }
}




.navigation {
  
  a {
  color: $secondary;
  text-decoration: none;
  position: relative;
  transition:all 0.2s ease-in-out;

   &::before{
    position: absolute;
    left:0;
    right:0;
    bottom:-2px;
    content:'';
    display: block;
    width:0%;
    height: 1px;
    transition:all 0.2s ease-in-out;
    background-color: $secondary;

  }

  &:hover{
    color:$glow;
    
  &::before{
    width:100%;
    background-color:$glow;
  }

  }

 
  }
  
    a.router-link-exact-active::before{
    width:100%
  }

}
.nav-links{
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  font-size: 13px;

  ul{
    display: flex;

    li{
      margin-right: 20px;
    }
  }


}

.nav-btn{
  width:32px;
  cursor: pointer;
  z-index: 99;
   &:hover{
     .bar{
       background-color: $glow;
     } 
    }

  .bar{
    width:100%;
    background-color: #fff;
    height:3px;
    margin-bottom:6px;
    transition: all 0.3s ease-in-out;
  }

}

.mobileNavActive{
  .bar:nth-child(1){
    transform: rotate(45deg) translateY(12.5px)
  }

   .bar:nth-child(3){
    transform: rotate(-45deg) translateY(-12.5px)
  }

  .bar:nth-child(2){
    width:0;
  }
}


.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(20vw);
  opacity: 0;
}
.slide-fade-enter-to, .slide-fade-leave-from{
  transform: translateX(0);
  opacity: 1;
}

.footer{
  background-color: rgb(19, 18, 18);
  padding-block: 20px;
  color:$secondary;
  font-size: 12px;

}
</style>
