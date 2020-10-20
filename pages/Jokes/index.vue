<template>

  <div>
    <v-container>
      <h1 class="d-flex justify-center mb-2">THE Jokes On You!!!!</h1>
      
      <v-row align="center" justify="space-around">
        <v-btn outlined color="teal" @click="addJoke">Add a Joke</v-btn>
        <nuxt-link class="text-decoration-none" to="Jokes/Alljokes" >
          <v-btn dark outlined color="blue">See Jokes</v-btn>
        </nuxt-link>
      </v-row>
        
    </v-container>
    
    <v-card>
      <v-card-text class="display-1 red--text text--lighten-1 my-4">
        <!-- the joke below is a function -->
        {{ joke }} 
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </div>
  
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'


export default {
   head() {
    return {
      title: 'Get your dad jokes', // title tag
      meta: [
        {
          hid: 'description',
          name: 'description', /// description tag
          content: 'Get a dad joke'
        }
      ]
    }
  },
  data() {
    return {
      // AllJokes: [],
    }
  },

  computed: {
    ...mapGetters(['getCurrentJoke']),
    joke() {
      return this.getCurrentJoke
    }
  },
  methods: {
    ...mapActions(['fetchCurrentJoke']),
    addJoke() {
      // indirectly change the mutation (asynchronously)
      this.fetchCurrentJoke() // equals to `this.$store.dispatch("setCurrentJoke")
    }
  },
  

}
</script>

<style>
  
</style>