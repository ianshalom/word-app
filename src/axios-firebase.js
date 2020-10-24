import axios from "axios";

const instance = axios.create({
  baseURL: "https://word-app-3389d.firebaseio.com/",
});

export default instance;
