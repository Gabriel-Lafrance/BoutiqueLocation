import Header from "src/components/section/Header";
import Footer from "src/components/section/Footer";

import { Routes, Route } from 'react-router-dom';
import Acceuil from "src/components/page/Acceuil";
import Inventaire from "src/components/page/Inventaire";
import Services from "src/components/page/Services";
import Location from "src/components/page/Location";
import Contact from "src/components/page/Contact";


export function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/Acceuil" element={<Acceuil/>}></Route>
        <Route path="/Inventaire" element={<Inventaire/>}></Route>
        <Route path="/Location" element={<Location/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
