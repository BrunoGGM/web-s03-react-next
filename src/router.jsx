import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import PokeApi from "@/pages/poke-api";
import NotFound from "@/pages/not-found";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/poke-api", element: <PokeApi /> },
    { path: "*", element: <NotFound /> },
]);
