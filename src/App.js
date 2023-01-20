import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <hr color="grey"></hr>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
