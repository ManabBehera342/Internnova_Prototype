
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Website from './pages/Website';
import About from './components/About/About';
import Faq from './components/Faq/Faq';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/faq" element={<Faq/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
  
    );
}

export default App;
