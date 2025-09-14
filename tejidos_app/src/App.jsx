import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Historia from "./Historia";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <Historia />
      <Productos />
      <Newsletter />
      <Contacto />
    </>
  );
}
