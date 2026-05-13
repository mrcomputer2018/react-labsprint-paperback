import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "@/components/ui/sonner";

import App from "./App.tsx";
import { AuthProvider } from "./contexts/auth-context.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AuthProvider>
            <App />
            <Toaster richColors position="top-right" />
        </AuthProvider>
    </StrictMode>,
);
