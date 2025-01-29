import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import homeBanner from '../assets/home-banner.png';

const Anasayfa = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh',
      position: 'relative',
      backgroundImage: `url(${homeBanner})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          fontFamily: 'Barlow, sans-serif',
          fontWeight: '700',
          letterSpacing: '1px'
        }}>
          Teknolojik Yemekler
        </h1>
        
        <h2 style={{ 
          fontSize: '5rem',
          marginBottom: '3rem',
          fontWeight: '300',
          fontFamily: 'Roboto Condensed, sans-serif',
          letterSpacing: '2px',
          lineHeight: '1',
          textTransform: 'uppercase'
        }}>
          KOD AÇIKTIRIR <br />
          PİZZA, DOYURUR
        </h2>

        <Button
          variant="warning"
          onClick={() => navigate('/siparis-olustur')}
          style={{
            backgroundColor: '#FDC913',
            border: 'none',
            padding: '12px 50px',
            fontSize: '1.3rem',
            fontWeight: '500',
            fontFamily: 'Barlow, sans-serif',
            borderRadius: '30px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          ACIKTIM
        </Button>
      </div>
    </div>
  );
};

export default Anasayfa; 