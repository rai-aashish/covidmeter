<template>
  <div class="all">
       <div class="heading" @click="enter">Covid-19 cases All</div>

      <div class="container">
        <transition-group v-on:enter="enter" >
          <div class="card">{{data.cases}}<h2 class="card__title">Total cases </h2></div>
          <div class="card">{{data.deaths}}<h2 class="card__title">Total deaths</h2></div>
          <div class="card">{{data.active}}<h2 class="card__title">Total active</h2></div>
          <div class="card">{{data.recovered}}<h2 class="card__title">Total recovered </h2></div>
        </transition-group>
      </div>
        
      

  </div>


</template>
<script>
import axios from 'axios'
import gsap from 'gsap'
export default{
  data(){
    return{
      data: Object, 
    }
  },
  methods:{
    enter(){
      gsap.from('.card',{
        duration:0.5,
        x:450,
        opacity:0,
        stagger:0.3,
      })
    }
  },
  mounted(){

    axios
    .get('all')
    .then((response) =>  {
      this.data = response.data;
      console.log(this.data);
    });
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
  border: 1px solid rgba(247, 247, 247, 0.445);
  transform: $perspective-angle;
  letter-spacing: 1px;
  transition: all 0.4s ease;
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

  &:hover{
    transform: unset;

  }
  
}
.card__title {
  font-size: 20px;
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
