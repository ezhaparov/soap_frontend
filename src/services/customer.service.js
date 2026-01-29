import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/customers";


class CustomerService {
  getAll() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  create(data) {
    return axios.post(API_URL, data, { headers: authHeader() });
  }

  update(idCustomer, data) {
    return axios.put(`${API_URL}/${idCustomer}`, data, { headers: authHeader() });
  }

  deleteById(idCustomer) {
    return axios.delete(`${API_URL}/${idCustomer}`, { headers: authHeader() });
  }
}

export default new CustomerService();
