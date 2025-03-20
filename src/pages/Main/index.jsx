import Carousel from './components/Carousel';
import TalkTeamButton from './components/TalkTeamButton';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import ContentList from '../../components/ContentList';
import DetailsButton from '../../components/DetailsButton';
import PictureFrame from '../../components/PictureFrame';
import Line from '../../components/Line';
import ServiceBox from './components/ServiceBox';
import ContactList from '../../components/ContactList';
import OpeningHour from '../../components/OpeningHour';

import about_image from '../../assets/images/about/about-section.jpg';
import contact_image from '../../assets/images/contact/contact.png';

const Main = () => {
  return (
    <>
      <Carousel />
      <Line />
      <Container id="about-area">
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LogoTitle />
              </div>
              <div className="col-md-6">
                <PictureFrame><img src={about_image} alt="Concreteira Alvo Concreto" /></PictureFrame>
              </div>
              <div className="col-md-6">
                <MainTitle title='primary'>Conheça a Alvo Concreto</MainTitle>
                <ContentText>Na Alvo Concreto, transformamos o mercado da construção civil com soluções em concreto de
                  alta qualidade. Nosso objetivo é garantir a resistência e segurança das obras, usando as
                  melhores práticas e inovação tecnológica.</ContentText>
                <ContentText><span className='sm-remove'>Com uma sólida experiência, nossa missão é oferecer produtos e serviços que
                  atendam às
                  exigências mais rigorosas, sempre com pontualidade e responsabilidade ambiental.</span></ContentText>
                <ContentText>Confira os diferenciais que tornam a Alvo Concreto a escolha ideal para sua obra:</ContentText>
                <ContentList>
                  <li><i className="fas fa-check "></i><span>Concreto de alta resistência</span>
                  </li>
                  <li><i className="fas fa-check"></i><span>Soluções inovadoras</span>
                  </li>
                  <li><i className="fas fa-check"></i><span>Atendimento personalizado</span></li>
                  <li><i className="fas fa-check"></i><span>Garantia de qualidade</span></li>
                  <li><i className="fas fa-check"></i><span>Projetos sustentaveis </span></li>
                </ContentList>
                <DetailsButton><Link to="/about" className="btn-saiba-mais">Veja mais</Link></DetailsButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Line />
      <Container id="services-area">
        <div className="bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <MainTitle title='secondary'>Nossos serviços</MainTitle>
              </div>

              <ServiceBox
                titleService='Entrega de Concreto'
                serviceDesc='Oferecemos serviços de entrega pontual de concreto em qualquer lugar da cidade,
                  garantindo agilidade e eficiência.'
                icon='truck'
              />
              <ServiceBox
                titleService='Consultoria Técnica'
                serviceDesc='Nossa equipe especializada oferece suporte técnico para garantir a escolha do
                  concreto ideal para o seu projeto.'
                icon='hard-hat'
              />
              <ServiceBox
                titleService='Planejamento de Obras'
                serviceDesc='Ajudamos a planejar suas obras com precisão, otimizando recursos e reduzindo prazos
                  de execução.'
                icon='calendar-check'
              />
              <ServiceBox
                titleService='Projetos Personalizados'
                serviceDesc='Desenvolvemos soluções de concreto sob medida, atendendo às especificações exclusivas
                  de cada obra.'
                icon='drafting-compass'
              />
              <ServiceBox
                titleService='Garantia de Qualidade'
                serviceDesc='Realizamos testes rigorosos para assegurar a resistência e durabilidade do concreto
                  entregue.'
                icon='shield-alt'
              />
              <ServiceBox
                titleService='Soluções Sustentáveis'
                serviceDesc='Trabalhamos com materiais eco-friendly para minimizar os impactos ambientais em suas
                  construções.'
                icon='recycle'
              />
              <ServiceBox
                titleService='Manutenção de Equipamentos'
                serviceDesc='Realizamos a manutenção preventiva e corretiva de equipamentos para garantir sua
                  performance e durabilidade.'
                icon='cogs'
              />
              <ServiceBox
                titleService='Treinamento e Capacitação'
                serviceDesc='Oferecemos treinamentos para equipes de obra, garantindo o uso adequado e seguro dos
                  materiais e equipamentos.'
                icon='users-cog'
              />
            </div>
          </div>
        </div>
      </Container>
      <Line />
      <Container id="contact-area">
        {/* <!-- CONTACT --> */}
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="main-title">
                  <LogoTitle />
                </h3>
              </div>
              {/* <!-- Informações de Contato --> */}
              <div className="col-md-6">
                <MainTitle title='primary'>Contato</MainTitle>
                <ContentText>Estamos prontos para atender você! Estamos localizados na Rua da Construção, 123, Centro,
                  Rio
                  de Janeiro, RJ.</ContentText>
                <ContentText><span className="sm-remove">Estrategicamente bem posicionadas para continuar oferecendo soluções de
                  alta qualidade
                  para
                  suas obras com rapidez e eficiência.</span></ContentText>
                <ContentText>Entre em contato conosco para saber mais sobre nossos produtos e serviços:</ContentText>
                <ContactList />
                <OpeningHour />
              </div>
              {/* <!-- Imagem --> */}
              <div className="col-md-6">
                <PictureFrame><img className="rotate" src={contact_image} alt="Concreteira Alvo Concreto" /></PictureFrame>
              </div>
              <div className="col-md-12 btn-container">
                <TalkTeamButton />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Line />
    </>
  )
}

export default Main;