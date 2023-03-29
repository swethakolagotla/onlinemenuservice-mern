import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:4000/",
});
 const token=document.cookie.token
 console.log(token)
 
instance.defaults.headers.common['Authorization']='abcd'
export default instance