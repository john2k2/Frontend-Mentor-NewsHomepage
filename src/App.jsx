import "./App.css";

//componets
import MainHeader from "./components/MainHeader/MainHeader";
import MainHero from "./components/Hero/MainHero";
import NewSection from "./components/FooterSection/NewSection";
import Pagina from "./components/Pagina";

function App() {
    return (
        <div className="App">
            <MainHeader />
            <MainHero />
            <NewSection />
            <Pagina />
        </div>
    );
}
export default App;
