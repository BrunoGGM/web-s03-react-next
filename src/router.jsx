import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import PokeApi from "@/pages/poke-api";
import NotFound from "@/pages/not-found";
import Counter from "@/pages/counter";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/poke-api", element: <PokeApi /> },
    { path: "/counter", element: <Counter /> },
    { path: "*", element: <NotFound /> },
]);
