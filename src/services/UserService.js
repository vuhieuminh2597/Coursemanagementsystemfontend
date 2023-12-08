import axios from "axios";

const fetchAllUser = () => {
    return  axios.get("http://localhost:8080/api/v1/Student");
}

export {fetchAllUser};