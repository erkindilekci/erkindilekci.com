import React, {useEffect, useState} from 'react';
import './index.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from "./components/footer/Footer.jsx";

export default function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.body.classList.add('overflow-x-hidden');

        return () => {
            document.body.classList.remove('overflow-x-hidden');
        };
    }, []);

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={`${theme === 'dark' ? 'dark' : 'light'}`}>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Main/>
            <Footer/>
        </div>
    );
}