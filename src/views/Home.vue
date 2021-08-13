<template>
  <div class="home">
    <div class="display">
          <div class="menu">
            <div class="heading">Options</div>
            <ul>
              <li>All</li>
              <li>Today</li>
              <li>All</li>
            </ul>
          </div>

          <div class="display-content">
          <covidAll/>
          </div>
    </div>

  </div>
</template>

<script>
import covidAll from '../components/covidAll.vue'


export default {
  name: 'Home',
  components: {
    covidAll,

  
  }
}
</script>


<style lang="scss" scoped>

.display{
  background-color: rgba(49, 46, 46, 0.5);
  background-image:url('https://dailyiowan.com/wp-content/uploads/2020/03/TOP-2.jpg') ;
  background-repeat: no-repeat;
  
  color:$secondary;
  display:flex;

  .menu{
    width:20%;
    background-color:rgba($primary,0.4);
  }

  .display-content{
    flex-basis: 80%;
    text-align: center;
   
  }
}

.heading{
  background-color: rgba(0, 0, 0, 0.6);
  padding-block: 15px;
}

</style>