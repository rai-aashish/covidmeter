<template>
  <div id="nav">
    <div class="logo"><span>covid</span>meter</div>

    <div class="nav-links">
      <ul>
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link> </li>
        <li><router-link to="/animation">Contacts</router-link></li>
      </ul>
   
    </div>
  </div>
  
  <router-view/>


  <div class="footer">
    Developed by Aashish Rai
  </div>
</template>

<style lang="scss">

body{
  background-color: #000;
  
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
  color: #2c3e50;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
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



#nav a.router-link-exact-active{
  color: $nav-link;
}

#nav a.router-link-exact-active::before{
  background-color: $nav-link;
  width:100%
}
.nav-links{
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  font-size: 13px;
  text-transform: uppercase;

  ul{
    display: flex;

    li{
      margin-right: 20px;
    }
  }

  a {
  color: $secondary;
  text-decoration: none;
  position: relative;
  transition:all 0.2s ease-in-out;

   &::before{
    position: absolute;
    bottom:-2px;
    content:'';
    display: block;
    width:0%;
    height: 1px;
    transition:all 0.2s ease-in-out;
    background-color: $secondary;

  }

  &:hover{
    color:$nav-link;
    
  &::before{
    width:100%;
    background-color:$nav-link;
  }

  }

 
  }

}

.footer{
  background-color: rgb(19, 18, 18);
  padding-block: 20px;
  color:$secondary;
  font-size: 12px;

}
</style>
