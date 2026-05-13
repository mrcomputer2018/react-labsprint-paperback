import { BrowserRouter, Route, Routes } from "react-router";

import Login from "./pages/login";
import Register from "./pages/register";
import Sobre from "./pages/sobre";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota publica */}
                <Route path="/" element={<Login/>} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastro" element={<Register />} />


                {/* Rota privada */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
