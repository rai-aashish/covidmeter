<template>
    
    <div class="mobile-nav navigation" :v-if="mobileNav">
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link> </li>
        <li><router-link to="/animation">Contacts</router-link></li>
      </ul>

    </div>


</template>
<script>
export default{
  data(){
    return{ 
    }
  },
  
}
</script>

<style lang="scss" scoped>

.mobile-nav{
    width:50vw;
    height:100vh;
    z-index: 98;
    background-color: $primary;
    position: fixed;
    top:0;
    right:0;
    box-shadow: -100vw 3px 0px 100vw rgba(0,0,0,0.75);
-webkit-box-shadow: -100vw 3px 0px 100vw rgba(0,0,0,0.75);
-moz-box-shadow: -100vw 3px 0px 100vw rgba(0,0,0,0.75);

    ul{
        margin-top:50px;
    }
    li{
        padding-block: 10px;
        font-size: 15px;
    }
}

</style>
