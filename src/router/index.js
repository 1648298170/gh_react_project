import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../pages/layout/index.jsx";
import Home from "../pages/home/index.jsx";
import About from "../pages/about/index.jsx";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default Router;