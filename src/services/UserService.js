import axios from "./customize-axios";

const fetchAllUser = (page) => {
    return axios.get(`/api/user`)
}
const postCreateUser = (name, email,birthDay,address,gender,phone) => {
    return axios.post('/api/user/create',{name, email,birthDay,address,gender,phone});
}
export {fetchAllUser,postCreateUser};