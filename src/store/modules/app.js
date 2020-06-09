const state = {
  location: {}
};

const mutations = {
  SET_LOCATION: (state, location) => {
    state.location = location;
  }
};

const actions = {
  setLocation({ commit }, location) {
    commit('SET_LOCATION', location);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
