<template>
  <div class="container">
    <div class="content">
      <router-link class="close-profile" to="/">X</router-link>
      <div>
        <img src="/user.svg" class="list-item-image" />
        <h4 class="logo">{{ data.name }}</h4>
      </div>
      <p class="user-info">
        Email: <span class="info">{{ data.email }}</span>
      </p>
      <p class="user-info">
        CPF: <span class="info">{{ data.cpf }}</span>
      </p>
      <p class="user-info">
        Telefone: <span class="info">{{ data.phoneNumber }}</span>
      </p>
      <p class="user-info">
        Idade: <span class="info">{{ data.age }}</span>
      </p>
      <button @click="openUpdateUserModal()" class="button">
        Editar perfil
      </button>
      <button @click="openDeleteUserModal()" class="button">
        Excluir conta
      </button>
    </div>
    <div v-if="updateUserModal" class="modal">
      <form @submit="updateItem()" class="modal-form">
        <span class="modal-close" @click="closeupdateUserModal()">&times;</span>
        <input type="text" v-model="model.name" placeholder="NOME" />
        <input type="text" v-model="model.age" placeholder="IDADE" />
        <input type="text" v-model="model.cpf" placeholder="CPF" />
        <input
          type="text"
          v-model="model.email"
          placeholder="E-MAIL"
        />
        <input
          type="password"
          v-model="model.password"
          placeholder="SENHA"
        />
        <input type="text" v-model="model.phoneNumber" placeholder="TELEFONE" />
        <button type="submit" class="button">Editar</button>
      </form>
    </div>
    <div v-if="deleteUserModal" class="modal">
      <div class="modal-form">
        <span>Tem certeza que quer excluir sua conta?</span>
        <div class="button-wrapper">
          <button type="button" @click="deleteItem()" class="button">
            Excluir
          </button>
          <button type="submit" @click="closeDeleteUserModal()" class="button">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data() {
    return {
      model: {},
    };
  },
  computed: {
    data() {
      return this.$store.state.user;
    },
    updateUserModal() {
      return this.$store.state.updateUserModal;
    },
    deleteUserModal() {
      return this.$store.state.deleteUserModal;
    },
  },
  created() {
    return this.$store.dispatch("fetchUser", localStorage.getItem("user-id"));
  },
  methods: {
    openUpdateUserModal() {
      this.$store.dispatch("updateUserModalState", true);
    },
    closeupdateUserModal() {
      this.$store.dispatch("updateUserModalState", false);
    },
    updateItem() {
      this.$store
        .dispatch("updateUser", {
          model: this.model,
          id: localStorage.getItem("user-id"),
        })
        .finally(() => {
                this.$toast.open({
          message: "Usuário atualizado",
          position: "top",
          type: "success",
          duration: 5000,
          dismissible: true,
        });
          this.$store.dispatch("updateUserModalState", false);
        });
    },
    openDeleteUserModal() {
      this.$store.dispatch("deleteUserModalState", true);
    },
    closeDeleteUserModal() {
      this.$store.dispatch("deleteUserModalState", false);
    },
    deleteItem() {
      this.$store
        .dispatch("deleteUser", localStorage.getItem("user-id"))
        .finally(() => {
          localStorage.removeItem('user-token')
          localStorage.removeItem('user-id')
           this.$toast.open({
          message: "Usuário deletado",
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

.logo {
  color: #5c5f69;
  margin-bottom: 20px;
}
.button-wrapper{
  display: flex;
  justify-content: space-between;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-form {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
}

.modal-close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.modal-close:hover,
.modal-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>