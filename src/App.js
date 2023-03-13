import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal.js';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal]  = useState(true);
  const closeModal = () => {
      setOpenModal(false);
  }
  return (
    <div className="App">
      { openModal && <Modal closeModal={closeModal} />}
      <Navbar />
      <Hero />
      <hr color="grey"></hr>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
