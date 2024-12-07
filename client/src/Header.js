import {Link} from "react-router-dom";
import App from "./App.css";

export default function Header() {
    return(
        <header>
            <Link to="/" className="logo">
                <img src="/logo.jpg" alt="Logo" className="logo-image" />
            </Link>
            <div class="navbar">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#blog">Tech Blog</a>
                <a href="#3dmodels">3D Models</a>
            </div>
        </header>
    );
}