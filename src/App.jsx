import { useEffect } from "react";
import "./index.css";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main.jsx";

export default function App() {
    useEffect(() => {
        document.body.classList.add("overflow-x-hidden");
        return () => document.body.classList.remove("overflow-x-hidden");
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

