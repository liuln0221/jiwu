const state = {
  location: {
    name: '北京',
    domain: 'beijing'
  }
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
