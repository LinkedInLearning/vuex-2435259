export const moduleB = {
    namespaced: true,
    modules: {
        subModule: {
            namespaced: true,
            state: {
            },
            mutations: {
                login() { }
            },
            getters: {
                login() { return "submodule B" }
            },
            actions: {
                login() { }
            }
        }
    },
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