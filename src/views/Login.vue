<template>
  <div class="container">
      <form @submit="saveItem()" class="form-container">
           <h2 class="logo">Qualicorp</h2>
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
        <button type="submit" class="button">
          LOGIN
        </button>
        <span class="sign-up"
          >Ainda não tem conta?
          <router-link to="/signup">Cadastre-se</router-link></span
        >
      </form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    saveItem() {
      this.$store.dispatch("userAuth", this.model).finally(() => {
        this.$toast.open({
          message: "Logado com sucesso",
          position: "top",
          type: "success",
          duration: 5000,
          dismissible: true,
        });
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-up {
  font-size: 14px;
  color: #5c5f69;
  margin-top: 20px;
  margin-bottom: 20px;
}
.sign-up a {
  text-decoration: none;
   color: #0C416D;
  font-size: 14px;
  font-weight: bold;
}
.form-container {
  width: 100%;
  max-width: 500px;
  background: #f7f8fc;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
}
.login-input {
  height: 40px;
  border-radius: 8px;
  background: #ffffff;
  color: #5c5f69;
  border: 1px solid #f2f2f2;
  margin-top: 20px;
  padding-left: 10px;
}
.login-btn {
  height: 40px;
  border-radius: 8px;
  background: #ffffff;
  color: #5c5f69;
  border: 1px solid #f2f2f2;
  margin-top: 20px;
}
.logo {
  color: #5c5f69;
  margin-bottom: 20px;
}
</style>