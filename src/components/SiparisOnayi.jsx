import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';

const SiparisOnayi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, malzemelerToplam, genelToplam } = location.state || {};

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#CE2829',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px'
    }}>
      <img 
        src={logo} 
        alt="Teknolojik Yemekler" 
        style={{ 
          height: '30px',
          marginBottom: '60px'
        }}
      />
      <div style={{
        textAlign: 'center',
        color: 'white',
        marginBottom: '40px'
      }}>
        <p style={{ 
          fontSize: '2rem',
          marginBottom: '10px',
          fontFamily: 'Satisfy, cursive',
          color: '#FDC913'
        }}>
          lezzetin yolda
        </p>
        <h1 style={{ 
          fontSize: '3.5rem',
          fontFamily: 'Roboto Condensed, sans-serif',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '40px'
        }}>
          SİPARİŞ ALINDI
        </h1>

        <div style={{
          width: '100px',
          height: '1px',
          backgroundColor: 'white',
          margin: '0 auto 40px'
        }} />
        <div style={{
          maxWidth: '400px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            fontFamily: 'Barlow, sans-serif'
          }}>
            Position Absolute Acı Pizza
          </h2>

          <div style={{
            marginBottom: '30px',
            fontSize: '1.1rem',
            fontFamily: 'Barlow, sans-serif'
          }}>
            <p style={{ marginBottom: '10px' }}>Boyut: {formData?.boyut}</p>
            <p style={{ marginBottom: '10px' }}>Hamur: {formData?.hamurKalinligi}</p>
            <p>Ek Malzemeler: {formData?.malzemeler.join(', ')}</p>
          </div>

          <div style={{
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '5px',
            padding: '20px',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '15px',
              fontFamily: 'Barlow, sans-serif'
            }}>
              Sipariş Toplamı
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span>Seçimler</span>
              <span>{malzemelerToplam?.toFixed(2)}₺</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Toplam</span>
              <span>{genelToplam?.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiparisOnayi; 