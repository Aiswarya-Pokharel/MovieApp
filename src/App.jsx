
import Favourites from './pages/Favourites';
import HomePage from './pages/HomePage';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import '../src/css/App.css'
import { MovieProvider } from './components/contexts/MovieContext';
export default function App() {


  
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<Favourites />} />
          
        </Routes>
      </main>
    </MovieProvider>

    
  );
};
