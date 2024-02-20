import axios from "axios"

const axiosInstance = axios.create({
  // local instace of firebase instance
  // baseURL: "http://127.0.0.1:5001/clone-6e87e/us-central1/api",

  // deployed version of amazon server on render.com
  baseURL:"https://amazon-clone-backend-api-deploy.onrender.com"
});

export {axiosInstance}