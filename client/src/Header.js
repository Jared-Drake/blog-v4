import {Link} from "react-router-dom";
import App from "./App.css";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                <img src="/logo.jpg" alt="Logo" className="logo-image" />
            </Link>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Tech Blog</Link>
                <Link to="/3dmodels">3D Models</Link>
            </div>
        </header>
    );
}