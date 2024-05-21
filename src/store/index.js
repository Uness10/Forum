import { createStore } from 'vuex';

const store = createStore({
  state: {
    UserInfo: {}
  },
  mutations: {
    UpdateUserInfo(state, userInfo) {
      state.UserInfo = userInfo;
    }
  },
  actions: {
    UpdateUserInfo({ commit }, userInfo) {
      commit('UpdateUserInfo', userInfo);
    }
  },
  getters: {
    User(state) {
      return state.UserInfo;
    }
  }
});

export default store;
