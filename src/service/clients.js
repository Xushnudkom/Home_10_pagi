import http from "./config";

const clients = {
  get: (params) => http.get("/client/all", { params }),
    
};
export default clients;