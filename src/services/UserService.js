import axios from "./customize-axios";

const fetchAllUser = (page) => {
    return axios.get(`/api/user?page=${page}`)
}
const postCreateUser = (name, email,birthDay,address,gender,phone) => {
    return axios.post('/api/user/create',{name, email,birthDay,address,gender,phone});
}
const putUpdateUser = (id,name, email,birthDay,address,gender,phone) =>{
    return axios.put('/api/user/update',{id,name, email,birthDay,address,gender,phone})
}
export {fetchAllUser,postCreateUser,putUpdateUser};