<template>
  <div id="app">
    <div v-if="error">
      <p>
        <strong v-if="httpError.code">Código: {{ httpError.code }}</strong>
        <br />
        <span>{{ httpError.message }}</span>
      </p>
    </div>

    <Loader v-if="loader" />
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/shared/Loader";
export default {
  name: "App",
  components: { Loader },
  created() {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status < 400) {
          this.$toast.open({ message: error.response.data.msg, type: "error" });
          return Promise.reject(error);
        }
        if (error.response.status === 402) {
          this.$toast.open({ message: error.response.data.msg, type: "error" });
          return (window.location.href = error.response.data.location);
        }
        this.httpError = error.response.data;
        this.$store.dispatch("loaderState", false);
        this.$toast.open({
          message: "Test message from Vue",
          position: "top",
          type: "error",
          duration: 5000,
          dismissible: true,
        });
        return Promise.reject(error);
      }
    );
  },
  data() {
    return {
      error: false,
      httpError: {
        code: "0000",
        message: "Ocorreu um erro em sua requisição.",
      },
    };
  },
  computed: {
    loader() {
      return this.$store.state.loader;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
input{
    width: 60%;
    height: 40px;
    border-radius: 8px;
    background: #FFFFFF;
    color: #5C5F69;
    border: 1px solid #f2f2f2;
    margin-top: 20px;
    padding-left: 10px;
}
.container {
    width: 100vw;
    height: 100vh;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button{
    width: 40%;
    height: 40px;
    border-radius: 8px;
    background: #FFFFFF;
    color: #0C416D;
    border: 1px solid #0C416D;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
}
.button:hover{
  background: #0C416D;
  color: #FFFFFF;
}
.user-info{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
.info{
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 8px;
  margin-left: 8px;

}
.close-profile {
  color: #aaaaaa;
  text-decoration: none;
  float: right;
  margin-right: 90%;
  margin-top: 2%;
  left: 0;
  font-size: 20px;
  font-weight: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
