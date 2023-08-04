import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001"
})

export function makeRequest(url, options){
  return axios(url, options)
        .then(res => res.data)
        .catch(error => error?.response?.data?.message ?? "Error")
} 