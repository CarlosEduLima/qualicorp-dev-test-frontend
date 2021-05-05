<template>
  <div class="list-wrapper">
    <ul class="list">
      <li
        class="list-item"
        v-for="(item, $index) in data"
        v-bind:key="$index"
        @click="showUser(item._id)"
      >
        <div>
          <img src="/user.svg" class="list-item-image" />
        </div>
        <div class="list-item-content">
          <h4>{{ item.name }}</h4>
          <p>{{ item.email }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.state.users;
    },
  },
  methods: {
    showUser(id) {
      this.$router.push(`profile/${id}`);
    },
  },
};
</script>
<style scoped>
.list-wrapper {
  max-width: 400px;
  margin: 120px auto;
}
.list-item:hover {
  background: #d9d9d9;
}
.list {
  background: #f7f8fc;
  border-radius: 2px;
  list-style: none;
  padding: 10px 20px;
}

.list-item {
  display: flex;
  margin: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.list-item img {
  border-radius: 50%;
  width: 64px;
}
.list-item-content {
  margin-left: 20px;
}
.list-item-content p {
  margin: 0;
  margin-top: 5px;
  color: #717171;
}
.list-item-content h4 {
  color: #212b36;
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 5px;
  float: left;
}
</style>