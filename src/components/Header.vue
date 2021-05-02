<template>
  <div>
    <div class="header">
      <a href="#default" class="logo">Qualicorp Dev Test</a>
      <div class="header-right">
        <a href="#home">Meu perfil</a>
        <a href="#contact">Sair</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  overflow: hidden;
  background-color: #F7F8FC;
  padding: 20px 10px;
  position: fixed;
  top: 0;
  width: 100%;

}

.header a {
  float: left;
  color: #5C5F69;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
  margin-right: 30px;
  font-weight: bold;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>