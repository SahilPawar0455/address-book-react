import axios from "axios";

class person{

    baseUrl = "http://localhost:8080/person";

    createPerson(data) {
        return axios.post(`${this.baseUrl}/insert`,data);
      };
  
      findAllPerson() {
        return axios.get(`${this.baseUrl}/searchAllPerson`);
      };
  
      deletePerson = (id) => {
        return axios.delete(`${this.baseUrl}/deletePerson/${id}`);
      };
  
      updatePerson = (id, data) => {
        console.log(id);
        return axios.put(`${this.baseUrl}/updatePersonData/${id}`, data);
      };
  
      findPerson = (id) => {
        return axios.get(`${this.baseUrl}/searchPersonById/${id}`);
      };
}
export default new person();