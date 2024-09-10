
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Website from './pages/Website';
import About from './components/About/About';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
          <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="/about" element={<About/>}/>
          </Route>
    </Routes>
    </BrowserRouter>
  
    );
}

export default App;
