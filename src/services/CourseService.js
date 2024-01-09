import axios from "./customize-axios";

const fetchAllCourses = (page) => {
    return axios.get(`/api/v1/courses?page=${page}`)
}

const registrationCourse = (idUser,idCourse) => {
    return axios.put(`/api/v1/customers/${idUser}/course/${idCourse}`);
}

export {fetchAllCourses,registrationCourse}
