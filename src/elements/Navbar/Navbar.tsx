import "./Navbar.css";

const Navbar = (props: { pageNumber: number }) => {
    return (
        <div id="navbar">
            <a href="#">🚀 Why Melon</a>
            <a href="#">🔩 Documentation</a>
        </div>
    )
}

export { Navbar }