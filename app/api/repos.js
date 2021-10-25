import { create } from "apisauce";

const apiClient = create({
  baseURL: 'https://api.github.com/users'
})

const getRepo = (username) => apiClient.get(`/${username}/repos`);


export default {
  getRepo,
}