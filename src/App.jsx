import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Contact from "./pages/Contact";
import Notfound from "./pages/NotFound";
import Structure from "./Component/Structure";
import { createContext, useState } from "react";
import Javascript from "./Projects/Javascript";
import Python from "./Projects/Python";
import Uiux from "./Projects/Uiux";
import Itconsulting from "./Projects/Itconsulting";
import Mobileapp from "./Projects/Mobileapp";

export const Context = createContext();
function App() {
  const { Name, setName } = useState("Caleb Miracle");

  return (
    <>
      <main className="w-[100vw] h-full">
        <Context.Provider value={{ Name, setName }}>
          <Routes>
            <Route path="/" element={<Structure />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/javascript" element={<Javascript />} />
              <Route path="/python" element={<Python />} />
              <Route path="/uiux" element={<Uiux />} />
              <Route path="/itconsulting" element={<Itconsulting />} />
              <Route path="/mobileapp" element={<Mobileapp />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Context.Provider>
      </main>
    </>
  );
}

export default App;
//Routes is use to create defferent Route// it is also loke a contener that is use to place all our Route
//
