/* eslint-disable */ 
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
  },
  async newGrade({}, {
    user_id,
    subject,
    grade,
    remarks
  }){
    let form = new FormData();
    form.append('user_id', user_id);
    form.append('subject', subject);
    form.append('grade', grade);
    form.append('remarks', remarks);
    let res = await axios.post(`${process.env.VUE_APP_API_URL}/grades.php?a=new`, form);

    return res.data.status;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}