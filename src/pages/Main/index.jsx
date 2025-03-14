import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Line from '../../components/Line';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';

const Main = () => {
  return (
    <>
      <Carousel />
      <Line />
      <Container id="about-area">
        <div className="bg-default">
          {/* <div className="div-line"></div> */}
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LogoTitle />
              </div>
              <div className="col-md-6">
                <img className="img-fluid" src="" alt="Concreteira Alvo Concreto" />
              </div>

              <div className="col-md-6">
                <MainTitle>Conheça a Alvo Concreto</MainTitle>
                <p>Na Alvo Concreto, transformamos o mercado da construção civil com soluções em concreto de
                  alta qualidade. Nosso objetivo é garantir a resistência e segurança das obras, usando as
                  melhores práticas e inovação tecnológica.</p>
                <p>Com uma sólida experiência, nossa missão é oferecer produtos e serviços que
                  atendam às
                  exigências mais rigorosas, sempre com pontualidade e responsabilidade ambiental.</p>
                <p>Confira os diferenciais que tornam a Alvo Concreto a escolha ideal para sua obra:</p>
                <ul id="about-list">
                  <li><i className="fas fa-check "></i><span>Concreto de alta resistência e durabilidade</span>
                  </li>
                  <li><i className="fas fa-check"></i><span>Soluções inovadoras para cada tipo de projeto</span>
                  </li>
                  <li><i className="fas fa-check"></i><span>Atendimento personalizado com foco nas necessidades do
                    cliente</span></li>
                  <li><i className="fas fa-check"></i><span>Compromisso com a sustentabilidade e práticas
                    eco-friendly</span></li>
                  <li><i className="fas fa-check"></i><span>Entregas pontuais e com garantia de qualidade</span>
                  </li>
                </ul>
                <Link to="about.html" className="btn-saiba-mais">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Line />
    </>
  )
}

export default Main