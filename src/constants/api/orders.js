import axios from "configs/axios";

const orders = {
  all: (options = { params: {} }) => axios.get(`/orders`, options),
};

export default orders;
