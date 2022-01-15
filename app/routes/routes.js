import { lazy } from "@loadable/component";
import { AuthenticatedRoute, AuthenticatedRouteInLogin } from "@Routes/router";

const Register = lazy(() => import("@Screens/register/Register"));
const ThirdPartyInsurance = lazy(() => import("@Screens/thirdPartyInsurance/ThirdPartyInsurance"));

const routes = [
  {
    // AuthenticateComponent: AuthenticatedRoute,
    key: "cb7a3bf2-74fc-4324-90be-a489eade214c",
    path: "/register",
    exact: true,
    component: Register,
    id: "register",
  },
  {
    // AuthenticateComponent: AuthenticatedRoute,
    key: "b987c237-5e32-4b3d-89ac-b001b8bcff46",
    path: "/third",
    exact: true,
    component: ThirdPartyInsurance,
    id: "third",
  },
];

export default routes;
