<template>
  <div class="all">
       <div class="heading" @click="enter">Covid-19 cases  {{category}}</div>

      <div class="container">
       
   <transition-group :v-on-enter="enter">
          <div class="card">{{getCases()}}<h2 class="card__title">{{category}} cases </h2></div>
          <div class="card">{{getDeaths()}}<h2 class="card__title">{{category}} deaths</h2></div>
          <div class="card">{{data.active}}<h2 class="card__title">Active</h2></div>
          <div class="card">{{getRecovered()}}<h2 class="card__title">{{category}} recovered </h2></div>
   </transition-group>
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
        default:'All'
      }
  },
  data(){
    return{
      data: Object, 
    }
  },
  methods:{
    enter(){
      gsap.from('.card',{
        duration:0.3,
        x:450,
        opacity:0,
        stagger:0.2,
      },0.5)
    },
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
        if(this.category=="Total")
          return this.data.cases
        else if(this.category=="Today")
          return this.data.todayCases
        
      },

       getDeaths(){
        if(this.category=="Total")
          return this.data.deaths
        else if(this.category=="Today")
          return this.data.todayDeaths
      },

        getRecovered(){
        if(this.category=="Total")
          return this.data.recovered
        else if(this.category=="Today")
          return this.data.todayRecovered
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

@keyframes cardAni
{
  0%{
    transform: $perspective-angle;
  }
  100%{
    transform:rotateX(45deg) rotateY(0deg) rotateZ(-35deg);;
  }
}
</style>
