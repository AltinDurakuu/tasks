import { useEffect } from 'react';
import './../styles/Header.css';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const step = location.pathname.includes("/service/")
    return (
        <header>
            <div className="container">
                <h1>Choose Service</h1>
                <p>Step {step ? 2 : 1}/2</p>
            </div>
        </header>
    );
}

export default Header;
