<template>
  <div>
    <div class="container">
      <h1 class="title">nuxt firebase authentication template</h1>
      <template v-if="$store.getters['auth/getAuthenticated']">
        <div id="name">Welcome {{ $store.getters['auth/getName'] }}!</div>
      </template>
      <template v-else>
        <form @submit.prevent="pressed">
          <button>Google Login</button>
        </form>
        <div class="error" v-if="error">{{ error.message }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data() {
    return {
      error: '',
    }
  },
  methods: {
    pressed() {
      const provider = new firebase.auth.GoogleAuthProvider()

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const token = result.credential.accessToken
          const user = result.user
          this.$store.commit('auth/setAuthenticated', true)
          this.$store.commit('auth/setName', user.displayName)
          this.$router.push('secret')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        })
    },
  },
}
</script>

<style>
button {
  margin: 20px;
  padding: 10px;
  padding-inline: 30px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
