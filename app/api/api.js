import axios from "axios";
import env from "../../env";
import { useHistory } from "react-router-dom";
import storageHelper from "@Utils/storageHelper";

function Api() {
  this.apiCall = async (url, options = {}) => {
    return axios({
      method: options.method,
      url: this.baseAddress(url),
      data: options.params,
      headers: { "Content-Type": "application/json" },
    }).catch((err) => {
      if (err.response.status === 401) {
        storageHelper.clearLocalStorage();
        setTimeout(() => {
          const history = useHistory();
          history.push("/login");
        }, 3000);
      }
    });
  };
}
Api.prototype.baseAddress = function(address) {
  return env._BACKEND_BASE_URL + address;
};
const ApiPrototype = Api.prototype;

function createApiInterface(options) {
  return new Api(options);
}

export default createApiInterface;

export { ApiPrototype, createApiInterface };
