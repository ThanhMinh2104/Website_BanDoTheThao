import { HeaderOnly } from "~/components/Layout";
import Cart from "~/pages/Cart";
import NewsDetail from "~/pages/NewsDetail";
import ShirtDetail from "~/pages/ShirtDetail";
import Shirts from "~/pages/Shirts";
import Sport from "~/pages/Sport";
const { default: Home } = require("~/pages/Home");

const publicRoutes = [
    { path: "/", component: Home },
    {
        path: "/cart",
        component: Cart,
    },
    {
        path: "/newsdetail",
        component: NewsDetail,
    },
    {
        path: "/shirtdetail",
        component: ShirtDetail,
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
