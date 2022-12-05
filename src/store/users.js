import axios from 'axios';

const state = () => ({
  users: [],
})

const getters = {
  getUsers(state) {
    return state.users;
  }
}

const mutations = {
  setUsers(state, payload){
    state.users = payload;
  }
}

const actions = {
  async fetchUsers({commit}){
    let res = await axios.get('https://ionic-backend.000webhostapp.com/index.php?a=users');

    commit('setUsers', res.data.users);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}