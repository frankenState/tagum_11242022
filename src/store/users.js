import axios from 'axios';

const state = () => ({
  users: [],
  auth: {},
})

const getters = {
  getUsers(state) {
    return state.users;
  },
  getAuth(state){
    return state.auth;
  }
}

const mutations = {
  setUsers(state, payload){
    state.users = payload;
  },
  setAuth(state, payload){
    state.auth = payload;
  }
}

const actions = {
  async fetchUsers({commit}){
    let res = await axios.get('https://ionic-backend.000webhostapp.com/index.php?a=users');

    commit('setUsers', res.data.users);
  },
  async registration({commit}, payload){
    let res = await axios.post(process.env.VUE_APP_API_URL +  '/new_user.php', payload);

    localStorage.setItem('auth', JSON.stringify(res.data.user[0]));
    commit('setAuth', res.data.user[0]);
  },
  async login({commit}, payload){
    let res = await axios.post(process.env.VUE_APP_API_URL +  '/login.php', payload);

    if (res.data.users.length == 0)
      return res.data.users.length;

    localStorage.setItem('auth', JSON.stringify(res.data.users[0]));
    commit("setAuth", res.data.users[0]);

    return 1;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}