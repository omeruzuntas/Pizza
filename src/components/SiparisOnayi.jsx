import React from 'react';
import { useNavigate } from 'react-router-dom';

const SiparisOnayi = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#CE2829',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      {}
      <div style={{
        textAlign: 'center',
        color: 'white',
        marginBottom: '50px',
        marginTop: '20px'
      }}>
        <h1 style={{ 
          fontSize: '1.8rem',
          marginBottom: '5px',
          fontFamily: 'Barlow, sans-serif',
          fontWeight: '500'
        }}>
          Teknolojik Yemekler
        </h1>
      </div>

      {}
      <div style={{
        textAlign: 'center',
        color: 'white',
        marginTop: '15vh'
      }}>
        <h2 style={{ 
          fontSize: '4rem',
          marginBottom: '1rem',
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          TEBRİKLER!
        </h2>
        <h3 style={{ 
          fontSize: '3rem',
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          SİPARİŞİNİZ ALINDI!
        </h3>
      </div>
    </div>
  );
};

export default SiparisOnayi; 