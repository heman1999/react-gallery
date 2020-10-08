import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID lCcTeVMQd25_Q0WRB4_uSttO10Z7hBaWExFaoCEDv58",
  },
});
