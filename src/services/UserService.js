import axios from "./customize-axios";

const fetchAllUser = (page) => {
    return axios.get(`/api/v1/customers?page=${page}`)
}
const postCreateUser = (id,name, email,birthDay,address,gender,phone) => {
    return axios.post('/api/v1/customers/create',{id,name, email,birthDay,address,gender,phone});
}
const putUpdateUser = (id,name, email,birthDay,address,gender,phone) =>{
    return axios.put('/api/v1/customers/update',{id,name, email,birthDay,address,gender,phone})
}

const deleteUser = (id) => {
  return axios.delete(`/api/v1/customers/delete/${id}`);
}
export {fetchAllUser,postCreateUser,putUpdateUser,deleteUser};
