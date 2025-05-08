import { HeaderOnly } from "~/components/Layout";
import Cart from "~/pages/Cart";
import NewsDetail from "~/pages/NewsDetail";
import Shirts from "~/pages/Shirts";
import Sport from "~/pages/Sport";
const { default: Home } = require("~/pages/Home");

const publicRoutes = [
    { path: "/", component: Home },
    {
        path: "/cart",
        component: Cart,
        layout: HeaderOnly,
    },
    {
        path: "/newsdetail",
        component: NewsDetail,
    },
    {
        path: "/shirts",
        component: Shirts,
    },
    {
        path: "/sport",
        component: Sport,
    },
];

export { publicRoutes };
