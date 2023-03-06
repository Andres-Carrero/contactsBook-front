import axios from "axios";

const ContactService = {
   
    Create: (params) => {
        return new Promise((resolve, reject) => {
            axios.post(`/contact/create`, params)
            .then(function (response) {
              resolve(response["data"]);
            })
            .catch(function (response) {
              reject(response);
            });
        });
    },

    FindAll: (id) => {
      return new Promise((resolve, reject) => {
          axios.get(`/contact/findAll/${id}`)
          .then(function (response) {
            resolve(response["data"]);
          })
          .catch(function (response) {
            reject(response);
          });
      });
    },

    FindOne: (uuid) => {
      return new Promise((resolve, reject) => {
          axios.get(`/contact/findOne/${uuid}`)
          .then(function (response) {
            resolve(response["data"]);
          })
          .catch(function (response) {
            reject(response);
          });
      });
    },

    Update: (uuid, body) => {
      return new Promise((resolve, reject) => {
          axios.put(`/contact/update/${uuid}`, body)
          .then(function (response) {
            resolve(response["data"]);
          })
          .catch(function (response) {
            reject(response);
          });
      });
    },

    Delete: (uuid) => {
      return new Promise((resolve, reject) => {
          axios.delete(`/contact/delete/${uuid}`)
          .then(function (response) {
            resolve(response["data"]);
          })
          .catch(function (response) {
            reject(response);
          });
      });
    },

 
  
};

export default ContactService;
