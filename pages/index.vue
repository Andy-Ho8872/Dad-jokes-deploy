<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1 class="my-6">Welcome My Friend</h1>
        <v-img :src="require('~/assets/img/dadjokes.jpg')"></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>


export default {
  head() {
    return {
      title: 'Welcome to Dad Jokes House', // title tag
      meta: [
        {
          hid: 'description',
          name: 'description', /// description tag
          content: 'The Home page of D J H'
        }
      ]
    }
  },
  
}
</script>
