//LAYOUT USUARIO
import userLayout from "../layout/userLayout";

//VIEWS
import Home from "../views/Home";
import E404 from "../views/E404";
import Sitios from "../views/sitios/Sitios";
//MAPEO DE RUTAS

const routes = [
    {
        path: "/",
        component: userLayout,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/Home",
                component: Home,
                exact: true
            },
            {
                path: "/Sitios",
                component: Sitios,
                exact: true
            },
            {
                component: E404,
            }
        ]
    }
];

export default routes;