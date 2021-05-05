import axios from "axios";

export function addUser(data) {
    return axios.post(`https://qualicorp-dev-test.herokuapp.com/api/add-user`, data);
}
export function getUsers() {
    return axios.get(`https://qualicorp-dev-test.herokuapp.com/api/users`);
}
export function getUser(id) {
    return axios.get(`https://qualicorp-dev-test.herokuapp.com/api/user/${id}`);
}
export function userAuth(data) {
    return axios.post(`https://qualicorp-dev-test.herokuapp.com/api/login`, data);
}
export function updateUser(data, id) {
    return axios.put(`https://qualicorp-dev-test.herokuapp.com/api/update-user/${id}`, data);
}
export function deleteUser(id) {
    return axios.delete(`https://qualicorp-dev-test.herokuapp.com/api/delete-user/${id}`);
}

export default {
    addUser,
    getUsers,
    userAuth,
    getUser,
    updateUser,
    deleteUser
};
