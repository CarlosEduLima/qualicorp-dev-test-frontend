<template>
  <div class="container">
    <div class="content">
      <router-link class="close-profile" to="/">X</router-link>
      <div>
        <img src="/user.svg" class="list-item-image" />
        <h4 class="logo">{{ data.name }}</h4>
      </div>
      <p class="user-info">Email:<span class="info">{{ data.email }}</span></p>
      <p class="user-info">CPF:<span class="info">{{ data.cpf }}</span></p>
      <p class="user-info">Telefone:<span class="info">{{ data.phoneNumber }}</span></p>
      <p class="user-info">Idade:<span class="info">{{ data.age }}</span></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.state.user;
    }
  },
  created() {
    return this.$store.dispatch("fetchUser", this.$route.params.id);
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  max-width: 500px;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
}


</style>