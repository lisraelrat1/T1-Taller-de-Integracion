<template>
    <div class="accordion space" role="tablist">
    <b-card no-body class="mb-1 try">
      <b-button block v-b-toggle.accordion-1 variant="light">Season 1</b-button>
      <b-collapse id="accordion-1" accordion="my-accordion">
        <b-list-group>
        <b-list-group-item v-for="episode in filter(result, '1')" :key="episode.key" @click="trigger(episode.episode_id)"> {{episode.title}}</b-list-group-item>
        </b-list-group>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 try">
      <b-button block v-b-toggle.accordion-2 variant="light">Season 2</b-button>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
         <b-list-group>
            <b-list-group-item v-for="episode in filter(result, '2')" :key="episode.key" @click="trigger(episode.episode_id)">{{episode.title}}</b-list-group-item>
         </b-list-group>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 try">
      <b-button block v-b-toggle.accordion-3 variant="light">Season 3</b-button>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-list-group>
            <b-list-group-item v-for="episode in filter(result, '3')" :key="episode.key" @click="trigger(episode.episode_id)">{{episode.title}}</b-list-group-item>
         </b-list-group>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 try">
      <b-button block v-b-toggle.accordion-4 variant="light">Season 4</b-button>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-list-group>
            <b-list-group-item v-for="episode in filter(result, '4')" :key="episode.key" @click="trigger(episode.episode_id)">{{episode.title}}</b-list-group-item>
         </b-list-group>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 try">
      <b-button block v-b-toggle.accordion-5 variant="light">Season 5</b-button>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-list-group>
            <b-list-group-item v-for="episode in filter(result, '5')" :key="episode.key" @click="trigger(episode.episode_id)">{{episode.title}}</b-list-group-item>
         </b-list-group>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 try" v-if="seasons== 6">
      <b-button block v-b-toggle.accordion-3 variant="light">Season 6</b-button>
      <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
        <b-list-group>
            <b-list-group-item v-for="episode in filter(result, '6')" :key="episode.key" @click="trigger(episode.episode_id)">{{episode.title}}</b-list-group-item>
         </b-list-group>
      </b-collapse>
    </b-card>
  
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    seasons: null,
    result: null,
    quotes: null,
  }),
  created() {
    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes'
    ,{
        params: {
            series: this.$route.query.series
        }
    }).then((result) => {
      this.result = result.data;
      this.seasons = Math.max.apply(Math, this.result.map(function(o) { return parseInt(o.season); }))
    })
  },
  methods: {
    trigger(EpisodeId){
        this.$router.push('/episodes/' + EpisodeId);
        },
    filter(array, season) {
        let filtered = array.filter((el) => {
        return (el.season === season)
      })
      return filtered;
    }
    }
  }

</script>

<style>
body{
    background-color: #313131;
}

.center{
 margin: 5% 30%;
 display: block;
}

.move{
    width: 300px;
    margin: 5px 5px;
}

.try{
    width: 800px;
    margin: auto auto;
}
.space{
    margin-top: 6%;
}
.b-button{
    margin: 0px;

}

</style>