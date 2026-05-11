import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/login";
import Sobre from "./pages/sobre";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota publica */}
                <Route path="/" element={<Login/>} />
                <Route path="/sobre" element={<Sobre />} />

                {/* Rota privada */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
