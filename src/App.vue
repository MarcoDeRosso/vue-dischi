<template>
  <div id="app">
    <Header :albums="albums" @search="searchAlbum"/>
    <Main class="position-relative" :albums="inputSearch"/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data(){
    return{
      albums:[],
      inputSearch: []
    }
  },
  created(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((result)=>{
      this.albums=result.data.response;
      this.inputSearch=result.data.response;
    })
  },
   methods: {
    searchAlbum(searchString) {
      this.inputSearch = this.albums.filter((element)=>{
        return element.genre.includes(searchString);
      })
    }
  }
}
</script>

<style lang="scss">
@import "./style/app.scss"
</style>