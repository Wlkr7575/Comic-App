import axios from "axios";
const API = axios.create({baseURL:'http://localhost:3000/api'})
// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('user')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user').token)}`
//     }
// })
export const signin = (formdata) => API.post('user/signin',formdata)
export const signup = (formdata) => API.post('user/signup',formdata)