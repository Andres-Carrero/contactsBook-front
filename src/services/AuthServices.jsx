import axios from "axios";



 const AuthService = {
   
    FindData: (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`/findData/${id}`)
            .then(function (response) {
              resolve(response["data"]);
            })
            .catch(function (response) {
              reject(response);
            });
        });
    },

 
  
};

export default AuthService;
