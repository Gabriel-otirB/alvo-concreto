import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import ContentList from '../../components/ContentList';
import DetailsButton from '../../components/DetailsButton';
import PictureFrame from '../../components/PictureFrame';
import Line from '../../components/Line';
import ServiceBox from '../../components/ServiceBox';

import about_image from '../../assets/images/about/about-section.jpg';

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
                <ContentText><p className='sm-remove'>Com uma sólida experiência, nossa missão é oferecer produtos e serviços que
                  atendam às
                  exigências mais rigorosas, sempre com pontualidade e responsabilidade ambiental.</p></ContentText>
                <ContentText><p>Confira os diferenciais que tornam a Alvo Concreto a escolha ideal para sua obra:</p></ContentText>
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
    </>
  )
}

export default Main;