import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      id: '01',
      name: 'John Smith'
    },
    books: [
      {
        id: 11,
        title: 'Les Misérables',
        author: "Victor Hugo",
        availability: true
      },
      {
        id: 12,
        title: 'Mathilda',
        author: "Roald Dahl",
        availability: false
      },
      {
        id: 13,
        title: 'Dune',
        author: "Frank Herbert",
        availability: true
      },
    ]
  },
  getters: {
    getBooksInStock: (state) => {
      return state.books.filter(books => books.availability);
    },
    getBooksNotStock: (state) => {
      return state.books.filter(books => !books.availability);
    },
    booksInStockCount: (state, getters) => {
      return state.books.length - getters.getBooksNotStock.length;
    },
    getBookById: (state) => (id) => {
      return state.books.find(book => book.id === id);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
