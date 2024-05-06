import axios from "axios"


 const axiosInstance= axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        api_key: "ed49f2fedc67f05685b330f6b3a238d3"
    }
})

export default axiosInstance;