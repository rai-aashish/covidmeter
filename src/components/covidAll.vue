<template>
  <div class="all">
       <div class="heading">Covid-19 cases All</div>
       <ul>
          <li>Total cases: {{data.cases}}</li>
          <li>Total deaths: {{data.deaths}}</li>
          <li>Today cases: {{data.todayCases}}</li>
         
          <li>Today deaths: {{data.todayDeaths}}</li>
       </ul>

      

  </div>


</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      data: Object, 
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


</style>
