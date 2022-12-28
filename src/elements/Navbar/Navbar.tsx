import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = (props: { pageNumber: number }) => {
    const navigate = useNavigate();
    return (
        <div id="navbar">
            <button onClick={() => navigate("/")}>🚀 Home</button>
            <button onClick={() => navigate("/docs")}>🔩 Documentation</button>
        </div>
    )
}

export { Navbar }