<template>
  <div class="container">
      <form @submit="saveItem()" class="form-container">
          <h2 class="logo">Cadastre-se</h2>
        <input
          type="text"
          required
          v-model="model.name"
          placeholder="NOME"
        />
        <input
          type="text"
          v-model="model.age"
          placeholder="IDADE"
        />
        <input
          type="text"
          required
          v-model="model.cpf"
          placeholder="CPF"
        />
        <input
          type="text"
          required
          v-model="model.email"
          placeholder="E-MAIL"
        />
        <input
          type="password"
          required
          v-model="model.password"
          placeholder="SENHA"
        />
        <input
          type="text"
          v-model="model.phoneNumber"
          placeholder="TELEFONE"
        />
        <button type="submit" class="button">CADASTRAR</button>
      </form>
    </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    saveItem() {
      this.$store.dispatch("saveUser", this.model).finally(() => {
        this.$toast.open({
          message: "Usuário cadastrado com sucesso",
          position: "top",
          type: "success",
          duration: 5000,
          dismissible: true,
        });
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped>
.form-container {
  width: 100%;
  max-width: 500px;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  margin: 10px;
}
.logo {
  color: #5c5f69;
  margin-bottom: 20px;
}
</style>