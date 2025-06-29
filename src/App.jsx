import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import HackerRoom from "./components/HackerRoom.jsx";
import CanvasLoader from "./components/CanvasLoader.jsx";

const App = () => {
    return (
        <main className = "max-w-6xl mx-auto">
            <Navbar />
            <Hero />
            <HackerRoom />
            <CanvasLoader />
        </main>
    )
}

export default App;
