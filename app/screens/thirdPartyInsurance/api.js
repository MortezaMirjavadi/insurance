import { ApiPrototype } from "@App/api";
import { HTTP_METHOD_TYPE } from "@Config/constants";

ApiPrototype.getCarType = function() {
  return this.apiCall("vehicle/models/third", {
    method: HTTP_METHOD_TYPE.GET,
  });
};
