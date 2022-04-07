import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useEffect, useState } from "react";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <div className='content'> 
      <header></header>
      <main>
        <NavbarComp />
        {showButton && (
          <button onClick={scrollToTop} className="back-to-top">
            <i className='bx bx-chevrons-up'></i>
          </button>
        )}
      </main>
    </div>
  );
}

