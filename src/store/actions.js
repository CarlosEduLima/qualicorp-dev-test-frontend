import api from "../api";

const loaderState = (context, state) => {
  context.commit("LOADER_STATE", state);
};
const updateUserModalState = (context, state) => {
  context.commit("UPDATE_USER_MODAL_STATE", state);
};
const deleteUserModalState = (context, state) => {
    context.commit("DELETE_USER_MODAL_STATE", state);
};
const fetchUsers = (context) => {
  context.dispatch("loaderState", true);
  const request = api.getUsers();
  request.then((response) => {
    console.log(response.data);
    context.commit("USERS_SET", response.data);
  });
  request.finally(() => context.dispatch("loaderState", false));
  return request;
};
const fetchUser = (context, state) => {
  console.log(state);
  context.dispatch("loaderState", true);
  const request = api.getUser(state);
  request.then((response) => {
    context.commit("USER_SET", response.data);
  });
  request.finally(() => context.dispatch("loaderState", false));
  return request;
};
async function saveUser(context, state) {
  context.dispatch("loaderState", true);
  const request = await api.addUser(state);
  context.dispatch("loaderState", false);
  return request;
}
const userAuth = (context, state) => {
  context.dispatch("loaderState", true);
  const request = api.userAuth(state);
  request.then((response) => {
    localStorage.setItem("user-token", response.data.token);
    localStorage.setItem("user-id", response.data.user._id);
  });
  context.dispatch("loaderState", false);
  return request;
};

const updateUser = (context, state) => {
  context.dispatch("loaderState", true);
  const request = api.updateUser(state.model, state.id);
  request.then((response) => {
    context.commit("USER_SET", response.data.user.user);
  });
  context.dispatch("loaderState", false);
  return request;
};
async function deleteUser(context, state) {
    context.dispatch("loaderState", true);
    const request = await api.deleteUser(state);
    context.dispatch("loaderState", false);
    return request;
  }
export default {
  loaderState,
  fetchUsers,
  saveUser,
  userAuth,
  fetchUser,
  updateUserModalState,
  updateUser,
  deleteUserModalState,
  deleteUser
};
