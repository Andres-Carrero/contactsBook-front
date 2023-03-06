import axios from "axios";

const GroupService = {
   
    Create: (params) => {
        return new Promise((resolve, reject) => {
            axios.post(`/groups/create`, params)
            .then(function (response) {
              resolve(response["data"]);
            })
            .catch(function (response) {
              reject(response);
            });
        });
    },

    FindAll: (params) => {
        return new Promise((resolve, reject) => {
            axios.post(`/groups/findAll`, params)
            .then(function (response) {
              resolve(response["data"]);
            })
            .catch(function (response) {
              reject(response);
            });
        });
    },

 
  
};

export default GroupService;
