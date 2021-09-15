import './styles/style.css';
import Header from './components/Header';
import About from './components/About';
import References from './components/References';
import Contact from './components/Contact';
import MapLocation from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app blue">
      <Header />
      <About />
      <References />
      <Contact />
      <MapLocation />
      <Footer/>
    </div>
  );
}

export default App;
