import Vue from "vue";
import Vuex from "vuex";
import queries from "./store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authenticated: false,
    profileData: {},
  },
  mutations: {
    setAuthorization(state, payload) {
      state.Authenticated = payload;
    },
    setProfile(state, payload) {
			state.profileData = payload;

      // console.log('profiledata', state.profileData)

      localStorage.setItem("profileData", JSON.stringify(state.profileData));
      sessionStorage.setItem("profileData", JSON.stringify(state.profileData));
    },
  },
  actions: {
    ...queries,
  },
});
