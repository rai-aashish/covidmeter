<template>
  <div class="home">
    <div class="display">
          <div class="menu">
            <div class="heading">Options</div>
            <ul>
              <li class="active-menu" @click="allUpdates">All</li>
              <li @click="todayUpdates">Today</li>
            </ul>
          </div>

          <div class="display-content">
          <covidAll :category="category"/>
          </div>
    </div>

  </div>
</template>

<script>
import covidAll from '../components/covidAll.vue'


export default {
  name: 'Home',
  data(){
    return{
      category: 'All',
    }
  },
  components: {
    covidAll,

  
  },
  methods:{
    allUpdates(){
      this.category = "Total"
    },
    todayUpdates(){
      this.category = "Today"
    },
  }
}
</script>


<style lang="scss" scoped>

.display{
  background-color: rgba(214, 132, 132, 0.5);
  background-image:url('https://dailyiowan.com/wp-content/uploads/2020/03/TOP-2.jpg') ;
  background-repeat: no-repeat;
  
  color:$secondary;
  display:flex;

  .menu{
    width:20%;
    background-color:rgba($primary,0.2);

    li{
      padding-block: 10px;
      border-bottom: 1px solid $primary ;

      &:hover{
        color:$glow;     
        border-bottom: 1px solid rgba($glow,0.7) ;
      }
      }
  }

.active-menu{
  background-color: rgba($primary,0.5);
}
  .display-content{
    flex-basis: 80%;
    text-align: center;
    background-color:rgba($primary,0.5);

   
  }
}

.heading{
  background-color: rgba(0, 0, 0, 0.6);
  padding-block: 15px;
}


</style>