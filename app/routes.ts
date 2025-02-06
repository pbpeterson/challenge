import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/desafio1", "routes/desafio1.tsx"),
] satisfies RouteConfig;
