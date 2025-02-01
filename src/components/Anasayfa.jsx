import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import homeBanner from '../assets/home-banner.png';
import logoFooter from '../assets/logo-footer.svg';
import logo from '../assets/logo.svg';

import iconLocation from '../assets/icons/icon-1.png';
import iconMail from '../assets/icons/icon-2.png';
import iconPhone from '../assets/icons/icon-3.png';

import insta1 from '../assets/insta/li-0.png';
import insta2 from '../assets/insta/li-1.png';
import insta3 from '../assets/insta/li-2.png';
import insta4 from '../assets/insta/li-3.png';
import insta5 from '../assets/insta/li-4.png';
import insta6 from '../assets/insta/li-5.png';

import kart1 from '../assets/cta/kart-1.png';
import kart2 from '../assets/cta/kart-2.png';
import kart3 from '../assets/cta/kart-3.png';

import icon1 from '../assets/anasayfaicons/1.svg';
import icon2 from '../assets/anasayfaicons/2.svg';
import icon3 from '../assets/anasayfaicons/3.svg';
import icon4 from '../assets/anasayfaicons/4.svg';
import icon5 from '../assets/anasayfaicons/5.svg';
import icon6 from '../assets/anasayfaicons/6.svg';

import food1 from '../assets/pictures/food-1.png';
import food2 from '../assets/pictures/food-2.png';
import food3 from '../assets/pictures/food-3.png';

const Anasayfa = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ 
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: `url(${homeBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '80px',
        textAlign: 'center',
        color: 'white'
      }}>
        <img 
          src={logo} 
          alt="Teknolojik Yemekler" 
          style={{ 
            height: '40px',
            marginBottom: '1rem'
          }}
        />
        
        <p style={{
          fontFamily: 'Satisfy, cursive',
          fontSize: '1.8rem',
          color: '#FDC913',
          margin: '0 0 0.5rem 0'
        }}>
          fırsatı kaçırma
        </p>

        <h2 style={{ 
          fontSize: '4.5rem',
          margin: '0',
          fontWeight: '300',
          fontFamily: 'Roboto Condensed, sans-serif',
          letterSpacing: '2px',
          lineHeight: '1.2',
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
            position: 'relative',
            top: '60px',
            zIndex: 10
          }}
        >
          ACIKTIM
        </Button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        padding: '15px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <Button 
          variant="light" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px',
            border: 'none',
            background: 'transparent'
          }}
        >
          <img src={icon1} alt="" style={{ width: '24px', height: '24px' }} />
          <span style={{ color: '#333', fontSize: '14px' }}>YENİ! Kore</span>
        </Button>
        <Button 
          variant="light"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px'
          }}
        >
          <img src={icon2} alt="" style={{ width: '20px', height: '20px' }} />
          Pizza
        </Button>
        <Button 
          variant="light"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px'
          }}
        >
          <img src={icon3} alt="" style={{ width: '20px', height: '20px' }} />
          Burger
        </Button>
        <Button 
          variant="light"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px'
          }}
        >
          <img src={icon4} alt="" style={{ width: '20px', height: '20px' }} />
          Kızartmalar
        </Button>
        <Button 
          variant="light"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px'
          }}
        >
          <img src={icon5} alt="" style={{ width: '20px', height: '20px' }} />
          Fast food
        </Button>
        <Button 
          variant="light"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 15px'
          }}
        >
          <img src={icon6} alt="" style={{ width: '20px', height: '20px' }} />
          Gazlı İçecek
        </Button>
      </div>

      <div style={{ 
        padding: '40px 0', 
        maxWidth: '1200px', 
        margin: '0 auto',
        backgroundColor: '#FAF7F2'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '15px',
          padding: '0 20px',
          marginBottom: '60px'
        }}>
          <div style={{
            backgroundColor: '#CE2829',
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '280px',
            backgroundImage: `url(${kart1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '30px',
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: '42px',
                lineHeight: '1.1',
                marginBottom: '10px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: '600',
                color: 'white'
              }}>
                Özel <br />
                Lezzetus
              </h3>
              <p style={{
                fontSize: '16px',
                marginBottom: '20px',
                color: 'rgba(255,255,255,0.9)'
              }}>
                Absolute Acı Burger
              </p>
              <Button 
                variant="light"
                style={{
                  padding: '8px 25px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '15px',
                  backgroundColor: 'white',
                  color: '#CE2829',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                SİPARİŞ VER
              </Button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div style={{
              backgroundColor: '#292929',
              borderRadius: '15px',
              padding: '25px',
              position: 'relative',
              minHeight: '130px',
              backgroundImage: `url(${kart2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <h3 style={{
                fontSize: '25px',
                lineHeight: '1.2',
                marginBottom: '15px',
                fontFamily: 'Barlow, sans-serif',
                color: 'white'
              }}>
                Hackathon <br />
                Burger Menü
              </h3>
              <Button 
                variant="light"
                style={{
                  padding: '8px 25px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '15px',
                  backgroundColor: 'white',
                  color: '#CE2829',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                SİPARİŞ VER
              </Button>
            </div>

            <div style={{
              backgroundColor: '#FAF7F2',
              borderRadius: '15px',
              padding: '25px',
              position: 'relative',
              minHeight: '130px',
              backgroundImage: `url(${kart3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div>
                <h3 style={{
                  fontSize: '25px',
                  lineHeight: '1.2',
                  marginBottom: '15px',
                  fontFamily: 'Barlow, sans-serif',
                  color: '#CE2829'
                }}>
                  Çoooook hızlı <br />
                  npm gibi kurye
                </h3>
                <Button 
                  variant="light"
                  style={{
                    padding: '8px 25px',
                    fontSize: '14px',
                    fontWeight: '500',
                    borderRadius: '15px',
                    backgroundColor: 'white',
                    color: '#CE2829',
                    border: 'none',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  SİPARİŞ VER
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '0 20px' }}>
          <p style={{
            fontFamily: 'Satisfy, cursive',
            color: '#CE2829',
            fontSize: '24px',
            textAlign: 'center',
            margin: '0'
          }}>
            en çok paketlenen menüler
          </p>
          <h3 style={{
            textAlign: 'center',
            fontSize: '36px',
            margin: '10px 0 30px',
            fontFamily: 'Barlow, sans-serif',
            fontWeight: '600',
            color: '#333'
          }}>
            Acıktıran Kodlara Doyuran Lezzetler
          </h3>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '40px'
          }}>
            <Button 
              variant="light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon1} alt="" style={{ width: '20px', height: '20px' }} />
              Ramen
            </Button>
            <Button 
              variant="dark"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon2} alt="" style={{ width: '20px', height: '20px' }} />
              Pizza
            </Button>
            <Button 
              variant="light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon3} alt="" style={{ width: '20px', height: '20px' }} />
              Burger
            </Button>
            <Button 
              variant="light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon4} alt="" style={{ width: '20px', height: '20px' }} />
              French fries
            </Button>
            <Button 
              variant="light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon5} alt="" style={{ width: '20px', height: '20px' }} />
              Fast food
            </Button>
            <Button 
              variant="light"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 15px',
                borderRadius: '30px'
              }}
            >
              <img src={icon6} alt="" style={{ width: '20px', height: '20px' }} />
              Soft drinks
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px',
          }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <img 
                src={food1} 
                alt="Terminal Pizza" 
                style={{ 
                  width: '100%', 
                  marginBottom: '15px'
                }} 
              />
              <h4 style={{
                fontSize: '20px',
                marginBottom: '10px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: '500'
              }}>
                Terminal Pizza
              </h4>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '5px',
                marginBottom: '5px',
                color: '#666'
              }}>
                <span>4.9</span>
                <span style={{ color: '#999' }}>(200)</span>
              </div>
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#CE2829',
                margin: '0'
              }}>
                60₺
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <img 
                src={food2} 
                alt=" Absolute Acı Pizza" 
                style={{ 
                  width: '100%', 
                  marginBottom: '15px'
                }} 
              />
              <h4 style={{
                fontSize: '20px',
                marginBottom: '10px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: '500'
              }}>
                Absolute Acı Pizza
              </h4>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '5px',
                marginBottom: '5px',
                color: '#666'
              }}>
                <span>4.9</span>
                <span style={{ color: '#999' }}>(928)</span>
              </div>
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#CE2829',
                margin: '0'
              }}>
                85₺
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <img 
                src={food3} 
                alt="Tavuklu Burger" 
                style={{ 
                  width: '100%', 
                  marginBottom: '15px'
                }} 
              />
              <h4 style={{
                fontSize: '20px',
                marginBottom: '10px',
                fontFamily: 'Barlow, sans-serif',
                fontWeight: '500'
              }}>
                 Tavuklu Burger
              </h4>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '5px',
                marginBottom: '5px',
                color: '#666'
              }}>
                <span>4.9</span>
                <span style={{ color: '#999' }}>(462)</span>
              </div>
              <p style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#CE2829',
                margin: '0'
              }}>
                75₺
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ 
        backgroundColor: '#292929',
        color: 'white',
        padding: '40px 20px'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}>
          <div>
            <img src={logoFooter} alt="Logo" style={{ marginBottom: '20px' }} />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={iconLocation} alt="" style={{ marginRight: '10px' }} />
              <span>34 Londonderry Road, İstanbul Türkiye</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={iconMail} alt="" style={{ marginRight: '10px' }} />
              <span>aciktim@teknolojikyemekler.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={iconPhone} alt="" style={{ marginRight: '10px' }} />
              <span>+90 216 123 45 67</span>
            </div>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: '20px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: '600'
            }}>
              Hot Menu
            </h3>
            <ul style={{ 
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '10px' }}>Terminal Pizza</li>
              <li style={{ marginBottom: '10px' }}>5 Kişilik Hackathon Pizza</li>
              <li style={{ marginBottom: '10px' }}> Tavuklu Pizza</li>
              <li style={{ marginBottom: '10px' }}>Beyaz Console Frosty</li>
              <li style={{ marginBottom: '10px' }}>Testler Geçti Mutlu Burger</li>
              <li> Acı Burger</li>
            </ul>
          </div>

          <div>
            <h3 style={{ 
              fontSize: '18px',
              marginBottom: '20px',
              fontFamily: 'Barlow, sans-serif',
              fontWeight: '600'
            }}>
              Instagram
            </h3>
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px'
            }}>
              <img src={insta1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={insta2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={insta3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={insta4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={insta5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <img src={insta6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #404040',
          marginTop: '40px',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#808080'
        }}>
          © 2023 Teknolojik Yemekler.
        </div>
      </footer>
    </div>
  );
};

export default Anasayfa; 