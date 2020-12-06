import axios from "axios";
// import { helpers } from "@/assets/js/helper";

const getToken = () =>
  sessionStorage.getItem("profileData") || localStorage.getItem("profileData");

const isDev = false
// process.env.NODE_ENV !== "production";

const consoleStyle = "font-size: 12px;";

export const Api = axios.create({
  baseURL: "http://134.122.30.219",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use((request) => {
  if (isDev) {
    try {
      const token = getToken();

      // request.headers["Authorization"] = token ? `Token ${token}` : "";

      console.log(
        "%c%s",
        consoleStyle,
        `[Axios request log] ${request.method.toUpperCase()} ${request.baseURL +
          request.url} ${JSON.stringify(request.params) || ""}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  // const storageToken = getToken();
  // request.headers["Authorization"] = storageToken
  //     ? `Token ${storageToken}`
  //     : "";

  return request;
});

Api.interceptors.response.use(
  (res) => {
    if (isDev) {
      try {
        console.log(
          "%c%s",
          consoleStyle,
          `[Axios response log] [${
            res.status
          }] ${res.config.method.toUpperCase()} ${res.config.baseURL +
            res.config.url} ${JSON.stringify(res.config.params) || ""}\n`,
          res.data || "No data"
        );
      } catch (error) {
        console.error(error);
      }
    }

    return res;
  },
  (error) => {
    let errStr = `Ошибка при получении данных из сервера ${error}`;

    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // alert('Вы не авторизованы!')
      localStorage.removeItem("profileData");
      sessionStorage.removeItem("profileData");
      delete Api.defaults.headers.common["Authorization"];
      window.location.href = "/login";
    }

    if (error.response && error.response.status === 500) {
      // alert("Ошибка 500: внутренняя ошибка сервера")
      // window.location.href = "/"
      errStr = "Ошибка 500: внутренняя ошибка сервера";
    }

    if (
      (error.response && error.response.status === 408) ||
      error.code === "ECONNABORTED"
    ) {
      console.log(`A timeout happend on url ${helpers.mainUrl}`);
    }
    // console.log(errStr);
    Promise.resolve({
      error: true,
      errStr,
    });

    return {
      error: true,
      errStr,
    };
  }
);

export default {
  
  checkAuthorization({ state, commit, dispatch }) {
    let localdata =
      localStorage.getItem("profileData") || sessionStorage.getItem("profileData");

    if(!localdata) {
			sessionStorage.removeItem("profileData");
			
			localStorage.removeItem("profileData");
			return
		}

    // Api.defaults.headers.common["Authorization"] = `Token ${localdata}`;
    commit("setAuthorization", true);
    // console.log(JSON.parse(localdata))
    commit("setProfile", JSON.parse(localdata));

    // if (state.Authenticated && state.access_level === -1) {
    //   return dispatch("getProfileInfo");
    // }
  },

  login({ commit }, payload) {

    if (payload.username == 'admin' && payload.password == 'admin') {
      commit("setAuthorization", true);
      commit("setProfile", payload);
      // location.href = "/";
      return true
    } 
    return false
  },

  logout({ commit }) {
    // if (confirm('Хотите выйти из системы?')) {
    commit("setAuthorization", false);
    localStorage.removeItem("profileData");
    sessionStorage.removeItem("profileData");
    // delete Api.defaults.headers.common["Authorization"];
    location.href = "/login";
    // }
  },

  post(_, payload) {
    return Api.post(payload.url, payload.data)
      .then((res) => {
        if (res && res.data) {
          return res.data;
        }
      })
      .catch((err) => ({ error: err }));
  },
  get(__, payload) {
    return Api.get(payload.url, payload.data)
      .then((res) => res.data)
      .catch((err) => {
        return {
          error: err,
        };
      });
  },
  put(_, payload) {
    return Api.put(payload.url, payload.data)
      .then((res) => res)
      .catch((err) => ({ error: err }));
  },
  patch({}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Api.patch(payload.url, payload.data);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  },
  delete({}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Api.delete(payload.url, {
          data: payload.data,
        });
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  },

  async getDistricts(_, params) {
    return Api.get("/api/districts/", {params})
      .then((res) => res.data || [])
      .catch((e) => {
        console.error(e);
      });
  },

  async getDistrictsData(_, params) {
    console.log(params)
    return Api.get("/api/districts-data/", {params})
      .then((res) => res.data || [])
      .catch((e) => {
        console.error(e);
      });
  },


  //
};
