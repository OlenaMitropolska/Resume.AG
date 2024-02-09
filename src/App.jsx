
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components pages/Navbar';
import Footer from './Components pages/Footer';
import Main from './Components pages/Main';
import Education from './Components pages/Education';
import Career from './Components pages/Career';
import Contact from './Components pages/Contact';

function App() {
  return (
    <div data-theme="light" className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/education' element={<Education />} />
        <Route path='/career' element={<Career />} />
        <Route path='contact' element={<Contact />} />
      </Routes>

    <Footer />
    </div>
  );
}

export default App;
