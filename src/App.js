import logo from './logo.svg';
import Home from './Componentes/screens/Home';
import Servicios from './Componentes/screens/Servicios';
import HowWeWorks from './Componentes/screens/HowWeWorks';
import Benedits from './Componentes/screens/Benedits';
import Contact from './Componentes/screens/Contact';
import Nav from './Componentes/screens/Comp/Nav';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Home/>
    <Servicios/>
    <HowWeWorks/>
    <Benedits/>
    <Contact/>
    </div>
  );
}

export default App;
