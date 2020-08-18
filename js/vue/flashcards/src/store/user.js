export default {
  state: {
    user: {},
    authenticated: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthenticated(state, payload) {
      state.authenticated = payload;
    }
  },
  actions: {}
};
