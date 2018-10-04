<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <h3>{{ posts.title }}</h3>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';


export default {
  name: 'home',
  data(){
    return{
   posts:{}
    }
  },

  components: {
    HelloWorld
  },
 mounted() {
   this.getPosts()
 },
 methods:{
   getPosts(){

axios.get('http://178.128.17.92:8000/api/hello')
      .then(res => this.posts = res.data);

   }
 }

}

  
 
  


</script>
