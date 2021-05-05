import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
    loader: false,
    users: null,
    user: null,
    updateUserModal: false,
    deleteUserModal: false
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});