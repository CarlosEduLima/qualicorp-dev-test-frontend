<template>
  <div class="loader-background">
      <img  class="loader" src="/loader.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'Loader'
};
</script>

<style scoped>
.loader-background {
  background-color: rgba(255, 255, 255, 0.52);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.loader {
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
</style>
