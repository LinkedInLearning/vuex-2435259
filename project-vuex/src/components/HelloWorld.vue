<template>
  <div>
    <h1>Bibliothèque Online</h1>
    <h4>Utilisateur connecté : {{ $store.state.user.name }}</h4>
    <h4>ID : {{ showIdUser }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    showIdUser() {
      return this.$store.state.user.id;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
