import "./App.css";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import ContactsSection from "../components/ContactsSection";

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <ProjectsSection />
            <AboutSection />
            <ContactsSection />
        </>
    );
}

export default App;
