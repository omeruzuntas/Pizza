import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import formBanner from '../assets/form-banner.png';
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

const Siparisformu = () => {
  const navigate = useNavigate();
  const MALZEME_FIYAT = 5;

  const [adet, setAdet] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamurKalinligi: '',
    malzemeler: [],
    not: '',
    adet: 1
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const hasErrors = 
      !formData.isim || 
      formData.isim.length < 3 ||
      !formData.boyut ||
      !formData.hamurKalinligi ||
      formData.malzemeler.length < 4 ||
      formData.malzemeler.length > 10;
    
    setIsFormValid(!hasErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        const response = await axios.post('https://reqres.in/api/pizza', formData);
        console.log('Sipariş başarılı:', response.data);
        navigate('/siparis-onayi', { 
          state: { 
            formData,
            malzemelerToplam: getMalzemelerToplam(),
            genelToplam: getGenelToplam()
          } 
        });
      } catch (error) {
        console.error('Sipariş hatası:', error);
      }
    }
  };

  const handleMalzemeChange = (e) => {
    const { checked, value } = e.target;
    let yeniMalzemeler = [...formData.malzemeler];
    
    if (checked) {
      yeniMalzemeler.push(value);
    } else {
      yeniMalzemeler = yeniMalzemeler.filter(m => m !== value);
    }

    setFormData({
      ...formData,
      malzemeler: yeniMalzemeler
    });
  };

  const handleAdetChange = (artis) => {
    const yeniAdet = adet + artis;
    if (yeniAdet > 0) {
      setAdet(yeniAdet);
      setFormData({
        ...formData,
        adet: yeniAdet
      });
    }
  };

  const getMalzemelerToplam = () => {
    return formData.malzemeler.length * MALZEME_FIYAT;
  };

  const getGenelToplam = () => {
    return (85.50 + getMalzemelerToplam()) * adet;
  };

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div style={{ 
        backgroundColor: '#CE2829',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center'
      }}>
        <img 
          src={logo} 
          alt="Teknolojik Yemekler" 
          style={{ 
            height: '30px',
            marginBottom: '5px'
          }}
        />
        <p style={{ 
          margin: '5px 0 0',
          fontSize: '14px',
          fontFamily: 'Barlow, sans-serif'
        }}>
          Anasayfa - Sipariş Oluştur
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <img 
          src={formBanner} 
          alt="Pizza" 
          style={{ 
            width: '100%',
            maxWidth: '500px',
            display: 'block',
            margin: '0 auto 40px',
            transform: 'translateY(-8.2%)'
          }}
        />

        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Position Absolute Acı Pizza</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', margin: '0' }}>85.50₺</h3>
          <div>
            <span>4.9</span>
            <span style={{ color: '#6c757d', marginLeft: '5px' }}>(200)</span>
          </div>
        </div>
        
        <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '30px' }}>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı bugday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>

        <Form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Boyut Seç <span style={{ color: '#dc3545' }}>*</span></Form.Label>
                <div>
                  <Form.Check 
                    type="radio" 
                    label="Küçük" 
                    name="boyut" 
                    value="Küçük"
                    onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                  />
                  <Form.Check 
                    type="radio" 
                    label="Orta" 
                    name="boyut" 
                    value="Orta"
                    onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                  />
                  <Form.Check 
                    type="radio" 
                    label="Büyük" 
                    name="boyut" 
                    value="Büyük"
                    onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group>
                <Form.Label>Hamur Seç <span style={{ color: '#dc3545' }}>*</span></Form.Label>
                <Form.Select 
                  value={formData.hamurKalinligi}
                  onChange={(e) => setFormData({...formData, hamurKalinligi: e.target.value})}
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce">İnce</option>
                  <option value="Orta">Orta</option>
                  <option value="Kalin">Kalın</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-4">
            <Form.Label>Ek Malzemeler <span style={{ color: '#dc3545' }}>*</span></Form.Label>
            <p style={{ color: '#6c757d', fontSize: '14px', margin: '5px 0 15px' }}>
              En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="row">
              <div className="col-md-4">
                <Form.Check 
                  type="checkbox" 
                  label="Pepperoni" 
                  value="Pepperoni"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sosis" 
                  value="Sosis"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Kanada Jambonu" 
                  value="Kanada Jambonu"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Tavuk Izgara" 
                  value="Tavuk Izgara"
                  onChange={handleMalzemeChange}
                />
              </div>
              <div className="col-md-4">
                <Form.Check 
                  type="checkbox" 
                  label="Domates" 
                  value="Domates"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Soğan" 
                  value="Soğan"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sucuk" 
                  value="Sucuk"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sarımsak" 
                  value="Sarımsak"
                  onChange={handleMalzemeChange}
                />
              </div>
              <div className="col-md-4">
                <Form.Check 
                  type="checkbox" 
                  label="Biber" 
                  value="Biber"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Jalepeno" 
                  value="Jalepeno"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Ananas" 
                  value="Ananas"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Kabak" 
                  value="Kabak"
                  onChange={handleMalzemeChange}
                />
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>İsim <span style={{ color: '#dc3545' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              value={formData.isim}
              onChange={(e) => setFormData({...formData, isim: e.target.value})}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Sipariş Notu</Form.Label>
            <Form.Control 
              as="textarea" 
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{ resize: 'none' }}
            />
          </Form.Group>

          <div className="d-flex align-items-center mb-4">
            <Button 
              variant="warning" 
              className="px-3"
              onClick={() => handleAdetChange(-1)}
            >
              -
            </Button>
            <span className="mx-3">{adet}</span>
            <Button 
              variant="warning" 
              className="px-3"
              onClick={() => handleAdetChange(1)}
            >
              +
            </Button>
            
            <div className="ms-4 p-3 bg-light flex-grow-1">
              <div className="d-flex justify-content-between mb-2">
                <span>Seçimler</span>
                <span>{getMalzemelerToplam().toFixed(2)}₺</span>
              </div>
              <div className="d-flex justify-content-between text-danger">
                <span>Toplam</span>
                <span>{getGenelToplam().toFixed(2)}₺</span>
              </div>
            </div>
          </div>

          <Button 
            variant="warning" 
            type="submit"
            className="w-100"
            style={{ backgroundColor: '#ffc107', border: 'none' }}
            disabled={!isFormValid}
          >
            SİPARİŞ VER
          </Button>
        </Form>
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
            <img src={logo} alt="Logo" style={{ marginBottom: '20px' }} />
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
              <li style={{ marginBottom: '10px' }}>useEffect Tavuklu Pizza</li>
              <li style={{ marginBottom: '10px' }}>Beyaz Console Frosty</li>
              <li style={{ marginBottom: '10px' }}>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
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

export default Siparisformu; 