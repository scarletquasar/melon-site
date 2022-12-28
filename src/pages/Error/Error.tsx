import { Navbar } from "../../elements/Navbar/Navbar"
import "./Error.css";

const Error = () => {
    return (
        <>
            <header>
                <Navbar pageNumber={9} />
            </header>
            <main id="error-main">
                <h1>Page Not Found</h1>
                <h2>Are you using the correct route?</h2>
            </main>
        </>
    )
}

export { Error }