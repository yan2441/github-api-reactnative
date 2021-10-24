import { create } from "apisauce";

const apiClient = create({
  baseURL: 'https://api.github.com/search'
})

const getUsers = (query) => apiClient.get("/users", {
  q: query,
  per_page: 30,

});

const getMoreUsers = (query, page) => apiClient.get("/users", {
  q: query,
  per_page: 30,
  page: page
});

export default {
  getUsers,
  getMoreUsers
}