import { createStore } from 'vuex'

const moduleA = {
  state: {
    donation: 30
  },
  mutations: {
  },
  getters: {
    login() { console.log("module A") }
  },
  actions: {
  }
}

const moduleB = {
  state: {
    donation: 90
  },
  mutations: {
  },
  getters: {
    login() { return "module B" }
  },
  actions: {
  }
}

export default createStore({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    donation: 1,
    user: {
      id: '01',
      name: 'John Smith',
      connected: true
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
    increment(state, payload) {
      state.donation += payload.amount;
    }
  },
  actions: {
    updateDonation({ state, commit }, value) {
      if (state.user.connected) {
        commit('increment', value)
      }
    }
  }
})
