// DAD jokes API config
import axios from 'axios'
const url = 'https://icanhazdadjoke.com/' // Get a single joke
const headers = { Accept: "application/json" } // API config method 1
const config = { headers: { Accept: "application/json"} } // method 2

export const state = () => ({ // only the state needs to be a fuction
    currentJoke: '', // a single joke
    AllJokes: [] 
})

export const getters = {
    getCurrentJoke(state) {
        return state.currentJoke
    },
    getAllJokes(state) {
        return state.AllJokes
    }
}

export const mutations = {
    setCurrentJoke(state, payload) {
        state.currentJoke = payload // single joke
        state.AllJokes.push(payload) // push a single joke to an array, then make it all jokes
    },
    clearAllJokes(state) {
        state.AllJokes = [] // clear the jokes
    },
}

// for async especially
export const actions = {
    async fetchCurrentJoke(state) {
      const res =  await axios.get(url, config)
        console.log(res.data); // to show the details
        state.commit("setCurrentJoke", res.data.joke)
    },
}

