<template>
  <div>
    <h1>{{titulo}}</h1>
    <img :src="foto.url" :alt="foto.titulo">
  </div>
</template>

<script>
export default {

  data(){
    return {
      titulo: 'VueGallery',
      foto: {
        url: 'http://sensoincomum.org/wp-content/uploads/2016/04/jairbolsonaro-1.jpg',
        titulo: 'Presidente da República'
      }
    }
  }
  
}
</script>

<style>

</style>
