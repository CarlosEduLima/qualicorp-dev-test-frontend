<template>
    <div>
      <Header />
      <UsersTable />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import UsersTable from "../components/UsersTable.vue";
export default {
  name: "Home",
  components: {
    Header,
    UsersTable
  },
  created() {
    return this.$store.dispatch('fetchUsers');
  }
};
</script>