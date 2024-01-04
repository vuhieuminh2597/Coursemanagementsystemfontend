import axios from "./customize-axios";

const fetchAllCourses = (page) => {
    return axios.get(`/api/v1/course?page=${page}`)
}

const registrationCourse = (idUser,idCourse) => {
    return axios.get(`/api/v1/customer/${idUser}/course/${idCourse}`);
}

export {fetchAllCourses,registrationCourse}