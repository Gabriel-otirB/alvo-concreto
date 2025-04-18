import Line from '../../components/Line';
import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import CalculatorTitle from './components/CalculatorTitle';
import CalculatorInputNumber from './components/CalculatorInputNumber';
import CalculatorInputText from './components/CalculatorInputText';
import CalculatorButton from './components/CalculatorButton';
import Loading from './components/Loading';
import { BudgetArea } from './styles';

import { useState, useEffect } from 'react';

import calculateConcreteVolume from '../../utils/operations';

const Budget = () => {

  const [concreting, setConcreting] = useState('');
  const [customConcreting, setCustomConcreting] = useState('');
  const [thickness, setThickness] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(0);

  const handleConcreting = (value) => {
    if (value === concreting) {
      value = '';
    }

    if (customConcreting !== '') {
      setCustomConcreting('');
    }

    setConcreting(value);
  }

  const handleCustomConcreting = (value) => {
    if (concreting !== '') {
      setConcreting('');
    }

    setCustomConcreting(value);
  }

  const handleCalculateAgain = () => {
    setResult(0);
    setWidth('');
    setLength('');
    setThickness('');
    setConcreting('');
    setCustomConcreting('');
  }

  const handleCalculateVolume = async () => {
    try {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const finalConcreting = customConcreting !== '' ? customConcreting : concreting;
      console.log('[Final Concreting]:', finalConcreting);

      const volume = await calculateConcreteVolume(thickness, width, length, finalConcreting);
      setResult(volume);
    } catch (error) {
      console.error('[Erro ao calcular o volume]:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = () => {
    const finalConcreting = customConcreting !== '' ? customConcreting : concreting;
    const subject = encodeURIComponent('Orçamento de Concreto');
    const body = encodeURIComponent(
      `Olá, gostaria de um orçamento para ${finalConcreting}.\n\nVolume estimado de concreto: ${result} m³.`
    );

    const email = import.meta.env.VITE_CONTACT_EMAIL;
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=lordglayder@gmail.com&su=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      const stillHere = !document.hidden;
      if (stillHere) {
        window.open(gmailLink, '_blank');
      }
    }, 1000);
  };

  const handleSendWhatsApp = () => {
    const finalConcreting = customConcreting !== '' ? customConcreting : concreting;
    const message = encodeURIComponent(
      `Olá! Gostaria de um orçamento para ${finalConcreting}. Volume estimado: ${result} m³.`
    );

    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <BudgetArea id='budget'>
        <Container>
          <div className="bg-default">
            <div className="container">
              <div className="row">

                {loading ? (
                  <div className="col-md-12 loading">
                    <Loading />
                  </div>
                ) : result === 0 ? (
                  <>
                    <div className="col-12">
                      <LogoTitle animation='slide-down' />
                    </div>
                    <div className="col-md-12">
                      <CalculatorTitle title='primary'>Calculadora de Concreto</CalculatorTitle>
                    </div>

                    <div className="col-md-6">
                      <div className='left-wrapper'>
                        <div className="icon-wrapper">
                          <div className="icon-container">
                            <div className="icon-row">
                              <div className="icon-item">
                                <button onClick={() => handleConcreting('Laje')} className={concreting === 'Laje' ? 'active' : ''}>
                                  <i className="fas fa-kaaba laje" title="Laje"></i>
                                  <small>Laje</small>
                                </button>
                              </div>
                              <div className="icon-item">
                                <button onClick={() => handleConcreting('Piso')} className={concreting === 'Piso' ? 'active' : ''}>
                                  <i className="fa-regular fa-square piso" title="Piso"></i>
                                  <small>Piso</small>
                                </button>
                              </div>
                            </div>
                            <div className="icon-row">
                              <div className="icon-item">
                                <button onClick={() => handleConcreting('Viga')} className={concreting === 'Viga' ? 'active' : ''}>
                                  <i className="fas fa-archway viga" title="Viga"></i>
                                  <small>Viga</small>
                                </button>
                              </div>
                              <div className="icon-item" title="Muro">
                                <button onClick={() => handleConcreting('Muro')} className={concreting === 'Muro' ? 'active' : ''}>
                                  <i className="fas fa-square muro"></i>
                                  <small>Muro</small>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <CalculatorInputText
                          label='outro'
                          placeholder={concreting ? concreting : 'Outra concretagem...'}
                          customConcreting={customConcreting}
                          handleCustomConcreting={handleCustomConcreting}
                        >
                          Outra concretagem? Informe-a abaixo:
                        </CalculatorInputText>
                      </div>
                    </div>

                    {/* Coluna para o formulário de cálculo  */}
                    <div className="col-md-6">
                      <div className='wrapper-inputs'>
                        <CalculatorInputNumber value={thickness} setValue={setThickness} label='espessura' placeholder='Insira a espessura...'>Espessura (cm):</CalculatorInputNumber>
                        <CalculatorInputNumber value={width} setValue={setWidth} label='largura' placeholder='Insira a largura...'>Largura (m):</CalculatorInputNumber>
                        <CalculatorInputNumber value={length} setValue={setLength} label='comprimento' placeholder='Insira o comprimento...'>Comprimento (m):</CalculatorInputNumber>
                      </div>
                      <div className="result-container"></div>
                    </div>
                    <CalculatorButton result={result} onClick={handleCalculateVolume} />
                  </>
                ) : (
                  <>
                    <div className="col-12">
                      <LogoTitle animation='slide-down' />
                    </div>
                    <div className="col-md-12">
                      <CalculatorTitle title="primary">Calculadora de Concreto</CalculatorTitle>
                      <div className="calculated-value">
                        <h2>Concreto estimado: <strong>{result}m³</strong></h2>
                      </div>

                      <h2 className="send-quote">Envie agora o seu orçamento por e-mail ou WhatsApp!</h2>
                    </div>

                    <div className="quote-buttons-area">
                      <div className="col-md-6">
                        <button className="email-button" onClick={handleSendEmail}>
                          <i className="fas fa-envelope"></i>
                          <span className="rm-mobile">Enviar orçamento por E-mail</span>
                          <span className="rm-desktop">Enviar</span>
                        </button>
                      </div>

                      <div className="col-md-6">
                        <button className="whatsapp-button" onClick={handleSendWhatsApp}>
                          <i className="fab fa-whatsapp"></i>
                          <span className="rm-mobile">Enviar orçamento por WhatsApp</span>
                          <span className="rm-desktop">Enviar</span>
                        </button>
                      </div>
                    </div>

                    <CalculatorButton result={result} onClick={handleCalculateAgain} />
                  </>
                )}
              </div>
            </div>
          </div>
        </Container >
      </BudgetArea>
      <Line />
    </>
  )
}

export default Budget