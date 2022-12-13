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
    let res = await axios.post('https://tagumseminar2022.000webhostapp.com/new_user.php', payload);

    localStorage.setItem('auth', JSON.stringify(res.data.user[0]));
    commit('setAuth', res.data.user[0]);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}