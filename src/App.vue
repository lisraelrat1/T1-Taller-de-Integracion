<template>
  <div id="app" class="small-container">
    <my-header/>
    <router-link to='/'></router-link>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default {
    name: 'app',
    components: {
      'my-header':Header,
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 100%;
    background: #313131;
    padding: 0;
    margin: 0;
  }
</style>