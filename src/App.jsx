
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components pages/Navbar';
import Footer from './Components pages/Footer';
import Main from './Components pages/Main';

function App() {
  return (
    <div data-theme="light" className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>

    <Footer />
    </div>
  );
}

export default App;
