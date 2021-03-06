import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar/Sidebar';
// import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Privacy from './components/Privacy/Privacy';

import AOS from 'aos';

AOS.init();

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        {/* <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
