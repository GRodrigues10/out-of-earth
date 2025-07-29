import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import History from './components/history/History';
import Gallery from './components/gallery/Gallery';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';
import Images from './pages/Images/Images';

function App() {
  return (
    <Router basename='/out-of-earth/'>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <History />
              <Gallery />
              <About />
              <Contact />
              <Footer />

            </>
          }
        />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
}

export default App;
