<template>
    <!-- <div class="b-dropdown">
    <button class="b-btn b-btn-secondary b-dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
    </button>
    <div class="b-dropdown-menu" aria-labelledby="dropdownMenuButton" v-for="episode in episodes" :key='episode.id'>
        <a class="b-dropdown-item" href="#">episode.title</a>
    </div>
    </div> -->

    <div>
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>

</template>

<script>
export default {
    name: 'season',
    props: {
    episodes: Array,
  },
}
  
</script>

<style>

</style>