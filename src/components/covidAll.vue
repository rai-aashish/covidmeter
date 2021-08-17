<template>
  <div class="all">
       <div class="heading" @click="enter">Covid-19 cases  {{category}}</div>

    
    
   <div class="container">
          <div class="card" v-if="true">{{getCases()}}<h2 class="card__title">{{category}} cases </h2></div>
          <div class="card" v-if="true">{{getDeaths()}}<h2 class="card__title">{{category}} deaths</h2></div>
          <div class="card" v-if="true">{{data.active}}<h2 class="card__title">Active</h2></div>
          <div class="card" v-if="true">{{getRecovered()}}<h2 class="card__title">{{category}} recovered </h2></div>
   </div>
  
        
      

  </div>


</template>
<script>
import axios from 'axios'
import gsap from 'gsap'
export default{
  props:{
      category : {
        type:String,
        default:'Total'
      }
  },
  data(){
    return{
      data: Object, 
    }
  },
  methods:{
  
  

    float(){
      gsap.to('.card',{
        duration:3,
        x:20,
        repeat:-1,
        yoyo:true,
        stagger:0.5
      })
    },

      getCases(){
        if(this.category=="Today")
          return this.data.todayCases
       else
          return this.data.cases
        
      },

       getDeaths(){
        if(this.category=="Today")
          return this.data.todayDeaths
        else
          return this.data.deaths

      },

        getRecovered(){
        if(this.category=="Today")
          return this.data.todayRecovered
        else
          return this.data.recovered
      }

  },
  mounted(){

    axios
    .get('all')
    .then((response) =>  {
      this.data = response.data;
      console.log(this.data);
    });

     this.float();
  }

}
</script>

<style lang="scss" scoped>
.heading{
  background-color:rgba(0, 0, 0, 0.6);
  padding-block: 15px;
}

.all{
  
  background-color: rgba(44, 44, 44, 0.425);

}
.container{
  width:80%;
  margin:auto;
  padding-block: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (max-width:$mobile-size) {
    width:100%;    
  }
}

.card {
  width: 200px;
  height: 150px;
  margin: 8px;
  font-size: 20px;
  border: 1px solid rgba(247, 247, 247, 0.445);
  transform: $perspective-angle;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  //animation: cardAni 5s infinite alternate;
  &:nth-child(1){
    background-color: $cases;
  }

   &:nth-child(2){
    background-color: $death;
  }
   &:nth-child(3){
    background-color: $active;
  }
   &:nth-child(4){
    background-color: $recovered;
  }

 
  
}
.card__title {
  font-size: 18px;
  font-weight: normal;
  letter-spacing: 0.1px;
  color: #fffbe1;
  position: absolute;
  left: 15px;
  bottom: 10px;
  margin: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter-to, .slide-fade-leave-from{
  transform: translateX(0px);
  opacity: 1;
}
</style>
