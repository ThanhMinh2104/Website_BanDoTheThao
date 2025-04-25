import { HeaderOnly } from "~/components/Layout";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";
const { default: Following } = require("~/pages/Following");
const { default: Home } = require("~/pages/Home");

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
];

export { publicRoutes };
