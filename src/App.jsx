
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import Layout from './components/Layout/Layout';
import Notfound from './pages/404-Notfound';
function App() {
  return (
    <div className="bg-[#ffffff] text-black min-h-screen font-sans">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

