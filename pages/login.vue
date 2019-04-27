<template>
  <div>
    <button v-if="authenticated" @click="$store.commit('logout')">Logout</button>
    <button v-else @click="$store.commit('login')">Login</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['authenticated'])
}
</script>
