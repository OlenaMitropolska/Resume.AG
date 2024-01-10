
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components pages/Navbar';
import Footer from './Components pages/Footer';

function App() {
  return (
    <div data-theme="light" className="App">
      <Navbar />

      <Routes>
        <Route />
      </Routes>
 <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <Footer />
    </div>
  );
}

export default App;
