<template>
  <div>
    <h1>Bibliothèque Online</h1>
    <h4>Utilisateur connecté : {{ user.name }} - {{ user.id }}</h4>
    <h3>Liste des livres disponibles (total : {{ nbBookInStock }})</h3>
    <p>Selection du livre ID: 11 {{ getBook(11) }}</p>
    <ul>
      <li v-for="book in listBooks" :key="book.id">
        {{ book.title }} - {{ book.author }}
      </li>
    </ul>
    <hr />
    <div>Total des dons : {{ donation }} €</div>
    <button @click="incrementDonation">+1€</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["donation", "user"]),
    ...mapGetters({
      listBooks: "getBooksInStock",
      nbBookInStock: "booksInStockCount",
      getBook: "getBookById",
    }),
  },
  methods: {
    incrementDonation() {
      return this.$store.commit("increment");
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
