import './App.css';
import NavBar from "./components/NavBar";
import collageImage from './assets/sawsanERRTHANG.png';
import heartSvg from './assets/sawsan heart svg.svg';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const heartReveal = document.querySelector('.heart-reveal');
    
    function toggleReveal() {
      const isRevealed = heartReveal.getAttribute('data-revealed') === 'true';
      heartReveal.setAttribute('data-revealed', !isRevealed);
    }
    
    heartReveal.addEventListener('click', toggleReveal);
    
    heartReveal.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleReveal();
      }
    });

    // Cleanup function
    return () => {
      heartReveal.removeEventListener('click', toggleReveal);
      heartReveal.removeEventListener('keydown', toggleReveal);
    };
  }, []);

  return (
    <div>
      <NavBar />
      {/* Heart Reveal Section */}
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="heart-reveal" role="button" tabIndex="0" aria-label="Click to reveal full image">
          <div className="heart-container">
            <div className="masked-layer">
              <div className="heart-shape">
                <img src={collageImage} alt="Collage" className="masked-image" />
                <svg className="heart-mask" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <mask id="heart-mask">
                      <rect width="100" height="100" fill="black"/>
                      <use href={heartSvg} fill="white"/>
                    </mask>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .heart-reveal {
          width: min(520px, 90vw) !important;
          aspect-ratio: 1 !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          cursor: pointer !important;
          position: relative !important;
          background: transparent !important;
          transition: transform 0.2s ease !important;
        }

        .heart-reveal:hover {
          transform: scale(1.02) !important;
        }

        .heart-reveal:focus {
          outline: none !important;
          outline-offset: 0 !important;
        }

        .heart-container {
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }

        .masked-layer {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          transition: all 0.4s ease !important;
          z-index: 10 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
        }

        .heart-shape {
          width: 250px !important;
          height: 250px !important;
          position: relative !important;
          overflow: hidden !important;
          transition: all 0.4s ease !important;
          background: transparent !important;
        }

        .masked-image {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          mask: url(#heart-mask) !important;
          -webkit-mask: url(#heart-mask) !important;
          mask-size: 100% 100% !important;
          -webkit-mask-size: 100% 100% !important;
        }

        .heart-mask {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1 !important;
        }

        .heart-reveal[data-revealed="true"] .heart-shape {
          width: 100% !important;
          height: 100% !important;
        }

        .heart-reveal[data-revealed="true"] .masked-image {
          mask: none !important;
          -webkit-mask: none !important;
        }
      `}</style>
    </div>
  );
}

export default App;
