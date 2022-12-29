import { useEffect } from "react";
import { Navbar } from "../../elements/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./Main.css";
import helloWorld from "../../assets/hello-world.png";

const HELLO_WORLD_ALT = `
const { http } = Melon;
const app = http.app();

app.get('/', () => "Hello Melon");

//App running on *localhost*
`;

const WIKI_HOME_URL = "https://github.com/MelonRuntime/Melon/wiki/Home---Welcome-to-the-Melon-Runtime-official-wiki";

const Main = () => {
    useEffect(() => {
        document.title = 'Melon Runtime';
    }, []);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main id="main-home">
                <h1>MELON</h1>
                <h2>
                    Fast, modern and functional .NET JavaScript runtime.
                </h2>
                <img src={helloWorld} alt={HELLO_WORLD_ALT} />
                <div id="main-home-buttons">
                    <button onClick={() => {window.open(WIKI_HOME_URL, "_blank")}}>
                        🔥 Try it yourself
                    </button>
                    <button>
                        📚 Getting Started
                    </button>
                </div>
            </main>
        </>
    )
}

export { Main }