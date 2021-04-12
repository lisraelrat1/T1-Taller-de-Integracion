<template>
    <header>
        <div id="top_element">
            <h2 @click="home()">Tarea 1</h2>
            <form class="searchbar">
                <div class="searchbar-input">
                    <input type="search" placeholder="Search Characters">
                    <a href="#" class="searchbar-clear"></a>
                </div>
            </form>
        </div>
    </header>


</template>

<script>
  export default {
    name: 'header',
    methods: {
      home(){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
:root {
    --primary-color: #232323;
    --secondary-color: #313131;
    --search-background: #ffffff;
    --expanded-width: 300px;
  }


body header {
    width: 100%;
    height: 150px;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
}

body header #top_element {
    height: 60%;
    background-color: var(--primary-color);
    align-items: right;
}

body header #top_element h2 {
    color: #E00A0A; 
    font-family: 'Open Sans', sans-serif; 
    font-size: 60px; 
    font-weight: 600;  
    margin: 2.5% 30px 72px; 
    text-align: left; 
}

body header #top_element .searchbar {
    position: absolute;
    background-color: var(--primary-color-color);
    width: 20%;
    margin: -9% 78%;
}

body header #main_search_element {
    height: 40%;
    background-color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
body header #main_search_element #search_icon_circle {
    width: 100px;
    height: 100px;
    background: var(--secondary-color);
    display: block;
    border-radius: 100px / 100px;
    position: relative;
    top: -22px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in;
}
body header #main_search_element #search_icon_circle #search_icon_background {
    width: 40px;
    height: 40px;
    background-color: var(--search-background);
    box-shadow: 10px 10px 20px 0px #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px / 100px;
    position: relative;
    top: -15px;
    cursor: pointer;
    transition: all 0.5s ease-in;
}
body header #main_search_element #search_icon_circle #search_icon_background .fas {
    color: var(--secondary-color);
    left: 2px;
    position: relative;
}
body header #main_search_element #search_icon_circle #search_icon_background .fa-times {
    display: none;
}
body header #main_search_element #search_icon_circle #search_icon_background input {
    transition: all 0.4s ease-in;
    opacity: 0;
    width: 0;
    background: var(--search-background);
    border: none;
    outline: none;
    color: #000000;
}
body header #main_search_element.expand #search_icon_circle {
    border-radius: 20px;
    width: var(--expanded-width);
}
body header #main_search_element.expand #search_icon_circle #search_icon_background {
    width: var(--expanded-width) - 5px;
    border-radius: 10px;
    padding-left: 4px;
    padding-right: 8px;
}
body header #main_search_element.expand #search_icon_circle #search_icon_background .fa-times {
    display: block;
}
body header #main_search_element.expand #search_icon_circle #search_icon_background input {
    width: var(--expanded-width) - 80px;
    opacity: 1;
    padding-left: 10px;
    outline: none;
    border: none;
}
</style>