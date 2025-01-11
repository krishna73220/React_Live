// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';



import Header from './Components/header';
import Footer from './Components/footer';
import MainHomeSection from './Components/home';
import Politics from './Components/politics';
import Sport from './Components/sport';
import Bihar from './Components/bihar';
import National from './Components/national';
import Crime from './Components/crime';
import Health from './Components/health';

// Blog page****************************
import Blog1 from './Components/is-baar-bhee-hoga-painorama-staar-seejan-07-ka-ivent';
import Blog2 from './Components/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha';
import Blog3 from './Components/tej-yaadav-ne-apane-maata-pita-ke-kaaryon';
import Blog4 from './Components/sata-me-rahte-huye-tranfer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainHomeSection />} />
        <Route path="/politics/" element={<Politics />} />
        <Route path="/sport/" element={<Sport />} />  
        <Route path="/bihar/" element={<Bihar />} />  
        <Route path="/national/" element={<National />} />  
        <Route path="/crime/" element={<Crime />} />  
        <Route path="/health/" element={<Health/>} />  
        <Route path='/is-baar-bhee-hoga-painorama-staar-seejan-07-ka-ivent' element={<Blog1/>}/>     
        <Route path='/panorama-group-ke-chairman-sanjeev-mishra-ne-ki-sabha' element={<Blog2/>}/>     
        <Route path='/tej-yaadav-ne-apane-maata-pita-ke-kaaryon' element={<Blog3/>}/>     
        <Route path='/sata-me-rahte-huye-tranfer' element={<Blog4/>}/>     
      </Routes>
       <Footer></Footer>
    </Router>
  );
}

export default App;









