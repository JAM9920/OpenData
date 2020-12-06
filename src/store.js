import Vue from "vue";
import Vuex from "vuex";
import queries from "./store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Authenticated: false,
    profileData: {},
    access_level: -1,
    user_types: {
      admin: 0,
      user: 1
    }
  },
  mutations: {
    setAuthorization(state, payload) {
      state.Authenticated = payload;
    },
    setProfile(state, payload) {
      const accessLevel = (payload || {}).user_type
			state.profileData = payload;
      state.access_level = accessLevel;

      // console.log('profiledata', state.profileData)

      localStorage.setItem("profileData", JSON.stringify(state.profileData));
      sessionStorage.setItem("profileData", JSON.stringify(state.profileData));
    },
  },
  actions: {
    ...queries,
  },
});
