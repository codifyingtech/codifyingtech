
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';

import Contactus from './pages/Contactus';





import Layout from './components/Layout/Layout';
import Notfound from './pages/404-Notfound';
import Ourteams from './pages/Ourteams';
function App() {
  return (
    <div className="bg-[#ffffff] text-black min-h-screen font-sans">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          
          <Route path='/OurTeam' element={<Ourteams/>} />
          
          App.js: <Route path='/ContactUs' element={<Contactus />} />

        <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

