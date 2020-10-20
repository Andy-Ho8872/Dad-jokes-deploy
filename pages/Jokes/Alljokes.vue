<template>
  <div>
    <!-- search area -->
    <v-container>
        <v-form class="d-flex pa-2 align-center">
          <v-text-field placeholder="Search Jokes Here" v-model="search" prepend-icon="mdi-text-search"></v-text-field>
        </v-form>
    </v-container>
    <!-- functional buttons  -->
    <v-container>
      <h1 class="d-flex justify-center mb-2">All Jokes Here !!!!</h1>
      <v-row align="center" justify="space-around">
        <nuxt-link class="text-decoration-none" to="/Jokes">
            <v-btn dark color="cyan">
              <v-icon>mdi-keyboard-backspace</v-icon> back
            </v-btn>
        </nuxt-link>
        <v-btn dark color="red" @click="clearJoke">
            <v-icon>mdi-delete</v-icon> Delete Jokes
        </v-btn>
      </v-row>
    </v-container>
    <!-- display jokes area -->
    <v-card v-for="(joke, index) in searchJoke" :key="index">
      <v-card-text class="text-h4 red--text text--lighten-1 my-4">
        <!-- the joke below is a function -->
        {{ index + 1 }} - {{ joke }} 
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'


export default {
   head() {
    return {
      title: 'Get All Jokes', // title tag
      meta: [
        {
          hid: 'description',
          name: 'description', /// description tag
          content: 'Get a All joke'
        }
      ]
    }
  },
  data() {
    return {
      search: '' // for searching Joke
    }
  },

  computed: {
    ...mapGetters(['getAllJokes']),
    jokes() {
      return this.getAllJokes
    },
    searchJoke() {
      return this.getAllJokes.filter(joke => {
        // trun all letters into lowerCase, so that we can search specific letter without matching the Case(upper or lower)
        return joke.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },

  methods: {
    ...mapMutations(['clearAllJokes']),
    clearJoke() {
      this.clearAllJokes() // directly change the mutation (synchronously)
    }
  }
}
</script>

<style>
  
</style>