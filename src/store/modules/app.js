const state = {
  location: {},
  login: false
};

const mutations = {
  SET_LOCATION: (state, location) => {
    state.location = location;
  },
  SET_LOGIN: (state, login) => {
    state.login = login;
  }
};

const actions = {
  setLocation({ commit }, location) {
    commit('SET_LOCATION', location);
  },
  setLogin({ commit }, login) {
    commit('SET_LOGIN', login);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
