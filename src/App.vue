<template>
  <v-app>
    <NavBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <ListTitle />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'
import ListTitle from './components/ListTitle'
export default {
  name: 'App',
  components:{ NavBar, ListTitle},
  data: () => ({
    //
  }),
}
</script>
