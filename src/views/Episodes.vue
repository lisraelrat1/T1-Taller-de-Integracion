<template>
    <div>
        <b-card
            :header= result.title
            style="max-width: 40rem;"
            class="mb-0 character-card"
            
        >
            <b-card-text>
                Season: {{result.season}} Episode:{{result.season}}
            </b-card-text>

            <b-card-text>
                Air_date: {{result.air_date}}
            </b-card-text>

            <b-card-text>
                Characters:
            </b-card-text>

            <b-list-group v-for="character in result.characters" :key="character.index">
                <b-list-group-item @click="trigger(character)">{{character}}</b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    result: null
  }),
  created() {
    axios.get('https://tarea-1-breaking-bad.herokuapp.com/api/episodes/' + this.$route.params.id).then((result) => {
      this.result = result.data[0];
      console.log(this.result)
    })
  },
  methods: {
      trigger(name){
        this.$router.push('/characters?name=' + name);
      },
  }
};

</script>

<style scope>
body{
    background-color: #313131;
}

.character-card {
    font: 20px "Lato", Arial, sans-serif;
    color: #A9A8A3;
    display: flex;
    margin: 20px auto;
    object-fit: cover;
}

.character-card img {
    margin: auto auto;
}
</style>