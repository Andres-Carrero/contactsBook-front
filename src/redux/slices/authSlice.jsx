import axios from "../../config/axios";
import moment from "moment";
import Swal from "sweetalert2";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const inicialState = {
  id: null,
  unique_id: null,
  name: null,
  lastName: null,
  email: null,
  state: null,
  token: null,
  init: null,
  expired: null,
  checking: false,
  loading: false,
  renderComponentLogin: true
};

const returnDataUser = (response) => {  
  return {
    id: response.data.data.id,
    unique_id: response.data.data.unique_id,
    name: response.data.data.name,
    lastName: response.data.data.lastName,
    email: response.data.data.email,
    state: response.data.data.state,
    token: response.data.data.token,
    init: response.data.data.init,
    expired: response.data.data.expired,
  };
};

export const startLogin = createAsyncThunk("authSlice/userAuth",
    async (credenciales, thunkAPI) => {
      return axios.post(`/login`, credenciales).then(function (response) {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.data.token);
            return returnDataUser(response);
          }
        }).catch(function (error) {
          Swal.fire("Error", "La contraseña o email son incorrectas", "error");
          return thunkAPI.rejectWithValue({ error: error });
        });
    }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: inicialState,
  reducers: {
    start: (state) => {
      state["checking"] = false;
      state["renderComponentLogin"] = true;
      localStorage.clear();
    },
  },
  extraReducers: {
    [startLogin.fulfilled.type]: (state, action) => {
      state["id"] = action["payload"]["id"];
      state["unique_id"] = action["payload"]["unique_id"];
      state["name"] = action["payload"]["name"];
      state['lastName'] = action["payload"]['lastName'];
      state['email'] = action["payload"]['email'];
      state['state'] = action["payload"]['state'];
      state['token'] = action["payload"]['token'];
      state['init'] =  moment(action["payload"]['init']*1000).format("YYYY-MM-DD HH:mm:ss");
      state['expired'] =  moment(action["payload"]['expired']*1000).format("YYYY-MM-DD HH:mm:ss");
      state["checking"] = true;
      state["loading"] = false;
      state["renderComponentLogin"] = true;
    },
 
  },
});

export default authSlice.reducer;