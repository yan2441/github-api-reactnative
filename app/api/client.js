import { create } from "apisauce";

const apiClient = create({
  baseURL: 'https://api.github.com/search'
})

const getUsers = (query, page = 1) => apiClient.get("/users", {
  q: query,
  per_page: 30,
  page: page
});


export default {
  getUsers,
}