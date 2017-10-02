<template>
  <div>
    <h1 class="centralizado">{{titulo}}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Infome o titulo para pesquisa">
    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo">

        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animacao="1.2" /> 
            <meu-botao tipo="button" rotulo="Remover" @botaoAtivado="remove(foto)" :confirmacao="true" estilo="perigo"/>    
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import Transform from '../../directives/Transform';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  directives:{
    'meu-transform': Transform
  },

  data(){
    return {
      titulo: 'VueGallery',
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },

  methods:{

      remove(foto){
    
          alert('remover: '+foto.titulo);
        
      }

  },

  created(){
    this.$http.get('http://localhost/api-php/foto/listar')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
  }
  
}

</script>

<style>

  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }

</style>