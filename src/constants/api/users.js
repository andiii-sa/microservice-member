import axios from "configs/axios";

const users = {
  login: (credentials) => axios.post(`/users/login`, credentials),
  register: (payload) => axios.post(`/users/register`, payload),
  refresh: (credentials) =>
    axios.post(`/refresh-tokens`, {
      refresh_token: credentials.refresh_token,
      email: credentials.email,
    }),
  update: (data) => axios.put("/users", data),
  logout: () => axios.post("/users/logout"),
  details: () => axios.get("/users"),
};

export default users;
