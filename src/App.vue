<template>
    <div id="app">
      <Header />
      <UsersTable />
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import UsersTable from "./components/UsersTable.vue";
export default {
  name: "App",
  components: {
    Header,
    UsersTable
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
