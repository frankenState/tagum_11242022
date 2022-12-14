import axios from 'axios';

const state = () => ({
  grades: [],
})

const getters = {
  getGrades(state) {
    return state.grades;
  }
}

const mutations = {
  setGrades(state, payload) {
    state.grades = payload;
  }
}

const actions = {
  async fetchGrades({commit}){
    let res = await axios.get(`${process.env.VUE_APP_API_URL}/grades.php`);

    // console.log("grades=> ", res.data, commit);
    commit('setGrades', res.data);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}