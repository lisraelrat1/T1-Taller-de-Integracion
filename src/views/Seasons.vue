<template>
    <div>
        <ul v-for="episode of result" :key=episode.episode_id>
            <li @click="trigger(episode.episode_id)">
                {{episode.title}}
            </li>
        </ul>
        
    </div>
</template>

<script>
import axios from 'axios';
// import Season from '@/components/Season.vue';

export default {
    data: () => ({
    result: null,
    quotes: null,
  }),
  created() {
    console.log('hola'+this.$route.query.series)
    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes'
    ,{
        params: {
            series: this.$route.query.series
        }
    })
    .then((result) => {
      this.result = result.data;
    })
  },
  methods: {
      trigger(EpisodeId){
        this.$router.push('/episodes/' + EpisodeId);
      },
  }
}
</script>

<style>

</style>