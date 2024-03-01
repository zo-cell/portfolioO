// import { useState } from 'react'
import './index.css';
import Hero from './components/2-Hero/Hero';
import Header from './components/1-Header/Header';
import Main from './components/3-Main/Main';
import Contact from './components/4-Contact/Contact';
import Footer from './components/5-Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{opacity: scroll ? 1 : 0, transition: "1s"}} href="#up">
        <button className="go2top icon-keyboard_arrow_up"></button>
      </a>

    </div>
  );
}

export default App;
