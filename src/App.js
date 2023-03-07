import './App.css';

import Header from './component/Header';
import VoiceToHand from './component/VoiceToHander';
import TextToHand from './component/TextToHander';
import AboutUsing from './component/AboutUsing';
import Footer from './component/Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' exact element={ <AboutUsing /> } />
        <Route path='VoiceToHand' element={  <VoiceToHand />} />
        <Route path='TextToHand' element={ <TextToHand /> } />
      </Routes>
      <Footer />
    </div>
  );

} export default App;
