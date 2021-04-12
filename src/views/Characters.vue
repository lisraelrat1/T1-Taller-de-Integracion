<template>
<div>
  <b-card no-body class="overflow-hidden character-card" style="max-width: 1000px;">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img :src= result.img alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="4">
        <b-card-body :title= result.name :sub-title= result.nickname>

        <b-list-group>
            <b-list-group-item>Portrayed by: {{result.portrayed}}</b-list-group-item>
            <b-list-group-item>Birthday: {{result.birthday}}</b-list-group-item>
            <b-list-group-item>Status: {{result.status}}</b-list-group-item>
            <b-list-group-item>Occupation: <p v-for="occupation in result.occupation" :key="occupation.index" >{{occupation}}</p>            
            </b-list-group-item>

         </b-list-group>

         </b-card-body>

    </b-col>
    <b-col md="4">
        <b-card-body>
            
            <b-list-group-item v-if="result.appearance.length>0">Seasons of Breaking Bad in which has been: </b-list-group-item>
                <b-list-group v-for="season in result.appearance" :key="season.index">
                    <router-link :to="{name: 'episodes-series', params:{series: 'Breaking Bad'}}"><b-list-group-item class="b-list-group-item">{{season}}</b-list-group-item></router-link>
                </b-list-group>

            <b-list-group-item v-if="result.better_call_saul_appearance.length>0">Seasons of Better Call Saul in which has been: </b-list-group-item>
                <b-list-group v-for="season in result.better_call_saul_appearance" :key="season.index">
                    <router-link :to="{name: 'episodes-series', params:{series:'Better Call Saul'}}"><b-list-group-item class="b-list-group-item">{{season}}</b-list-group-item></router-link>
                </b-list-group>
            
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
    <div class="mt-3 container">
        <b-card-group  class="container-card" deck v-for="quote in quotes" :key="quote.index">
            <b-card :header= quote.index class="text-center quotes" >
                <b-card-text>{{quote.quote}}</b-card-text>
            </b-card>
        </b-card-group>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    result: null,
    quotes: null,
  }),
  created() {
    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/characters/'
    ,{
        params: {
            name: this.$route.query.name
        }
    })
    .then((result) => {
      this.result = result.data[0];
    })

    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/quotes/'
    ,{
        params: {
            name: this.$route.query.name
        }
    })
    .then((result) => {
      this.quotes = result.data;
    })

  },
};

</script>

<style>

body{
    background-color: #313131;
}

.b-col{
    background-image: cover;
}

.container{
    margin-right: 6%;
}
.container-card{
    width: 30%;
    display: inline-block;
    margin: auto auto;
}

.quotes{
    margin: 50px auto;
    height: 9em;
}

.character-card {
    font: 14px/22px "Lato", Arial, sans-serif;
    color: #A9A8A3;
    padding: 30px 0;
    display: flex;
    margin: 30px auto;
    object-fit: cover;
}

.character-card img {
    margin: auto auto;
}
</style>