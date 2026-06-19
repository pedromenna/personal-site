import { useState } from "react";
import { LanguageProvider } from "./hooks/useLanguage";
import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./styles/global.css";

function App() {
  const [page, setPage] = useState("home");

  const handleSetPage = (name) => {
    setPage(name);
    window.scrollTo(0, 0);
  };

  const pages = {
    home: <Home setPage={handleSetPage} />,
    projects: <Projects />,
    contact: <Contact />,
  };

  return (
    <LanguageProvider>
      <StatusBar />
      <Navbar currentPage={page} setPage={handleSetPage} />
      {pages[page] ?? pages.home}
    </LanguageProvider>
  );
}

export default App;
