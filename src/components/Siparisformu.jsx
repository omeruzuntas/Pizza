import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
        navigate('/siparis-onayi');
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
      {}
      <div style={{ backgroundColor: '#dc3545', color: 'white', padding: '20px 0' }}>
        <div className="text-center">
          <h1 style={{ margin: '0', fontSize: '24px' }}>Teknolojik Yemekler</h1>
          <p style={{ margin: '5px 0 0', fontSize: '14px' }}>Anasayfa - Sipariş Oluştur</p>
        </div>
      </div>

      {}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {}
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Position Absolute Acı Pizza</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', margin: '0' }}>85.50₺</h3>
          <div>
            <span>4.9</span>
            <span style={{ color: '#6c757d', marginLeft: '5px' }}>(200)</span>
          </div>
        </div>
        
        {}
        <p style={{ color: '#6c757d', fontSize: '14px', marginBottom: '30px' }}>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı bugday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>

        {}
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
                    value="kucuk"
                    onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                  />
                  <Form.Check 
                    type="radio" 
                    label="Orta" 
                    name="boyut" 
                    value="orta"
                    onChange={(e) => setFormData({...formData, boyut: e.target.value})}
                  />
                  <Form.Check 
                    type="radio" 
                    label="Büyük" 
                    name="boyut" 
                    value="buyuk"
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
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalin">Kalın</option>
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
                  value="pepperoni"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sosis" 
                  value="sosis"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Kanada Jambonu" 
                  value="jambon"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Tavuk Izgara" 
                  value="tavuk"
                  onChange={handleMalzemeChange}
                />
              </div>
              <div className="col-md-4">
                <Form.Check 
                  type="checkbox" 
                  label="Domates" 
                  value="domates"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Soğan" 
                  value="sogan"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sucuk" 
                  value="sucuk"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Sarımsak" 
                  value="sarimsak"
                  onChange={handleMalzemeChange}
                />
              </div>
              <div className="col-md-4">
                <Form.Check 
                  type="checkbox" 
                  label="Biber" 
                  value="biber"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Jalepeno" 
                  value="jalepeno"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Ananas" 
                  value="ananas"
                  onChange={handleMalzemeChange}
                />
                <Form.Check 
                  type="checkbox" 
                  label="Kabak" 
                  value="kabak"
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
    </div>
  );
};

export default Siparisformu; 