import { useEffect } from "react";
import { Navbar } from "../../elements/Navbar/Navbar";
import "./Main.css";

const Main = () => {
    useEffect(() => {
        document.title = 'Melon Runtime';
    }, []);

    return (
        <>
            <header>
                <Navbar pageNumber={1} />
                
            </header>
            <main id="main-home">
                <h1>MELON</h1>
            </main>
        </>
    )
}

export { Main }