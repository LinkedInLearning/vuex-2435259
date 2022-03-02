<template>
  <div>
    <h1>Bibliothèque Online</h1>
    <h4>Utilisateur connecté : {{ user.name }} - {{ user.id }}</h4>
    <h3>Liste des livres disponibles (total : {{ nbBookInStock }})</h3>
    <ul>
      <li v-for="book in listBooks" :key="book.id">
        {{ book.title }} - {{ book.author }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
    listBooks() {
      return this.$store.getters.getBooksInStock;
    },
    nbBookInStock() {
      return this.$store.getters.booksInStockCount;
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
