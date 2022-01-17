import { ApiPrototype } from "@App/api";
import { HTTP_METHOD_TYPE } from "@Config/constants";

ApiPrototype.getCarType = function() {
  return this.apiCall("vehicle/models/third", {
    method: HTTP_METHOD_TYPE.GET,
  });
};
ApiPrototype.getInsureCompanies = function() {
  return this.apiCall("third/companies", {
    method: HTTP_METHOD_TYPE.GET,
  });
};
ApiPrototype.getThirdDiscount = function() {
  return this.apiCall("third/third-discounts", {
    method: HTTP_METHOD_TYPE.GET,
  });
};
ApiPrototype.getDriverDiscount = function() {
  return this.apiCall("third/driver-discounts", {
    method: HTTP_METHOD_TYPE.GET,
  });
};
