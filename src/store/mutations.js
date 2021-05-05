export const LOADER_STATE = (state, status) => {
    state.loader = status;
};
export const UPDATE_USER_MODAL_STATE = (state, status) => {
    state.updateUserModal = status;
};
export const DELETE_USER_MODAL_STATE = (state, status) => {
    state.deleteUserModal = status;
};
export const USERS_SET = (state, status) => {
    state.users = status;
};
export const USER_SET = (state, status) => {
    state.user = status;
};
export default {
    LOADER_STATE,
    USERS_SET,
    USER_SET,
    UPDATE_USER_MODAL_STATE,
    DELETE_USER_MODAL_STATE
}