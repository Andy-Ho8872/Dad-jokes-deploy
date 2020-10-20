<template>
<div>
  <div class="text-center purple--text">
    <h1>Hello This is dad jokes</h1>
    <h2> We are providing some Dad Joke to throw you a wet blaket </h2>
    <v-divider class="my-4"></v-divider>
  </div>

  <div>
    <h1 class="red--text">How to Use it?</h1>
    <v-card>
      <v-list color="red lighten-4">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-content class="display-1">
              {{ item.text }}
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-card>
  </div>
</div>
  
</template>

<script>
export default {
  // The head() fucntion is to set mata tag which makes a great impact on SEO
  head() {
    return {
      title: 'About Dad Jokes House', // title tag
      meta: [
        {
          hid: 'description',
          name: 'description', /// description tag
          content: 'A nice place to hear some dad jokes '
        }
      ]
    }
  },
  data() {
    return {
      items: [
        { text: '1.Go to the "Jokes" page by clicking Navbar button' },
        { text: '2.Click "ADD A JOKE" to get a radom dad joke' },
        { text: '3.Click "SEE JOKES" to get all dad jokes that you just added' }
      ]
    }
  }
}
</script>

<style>

</style>