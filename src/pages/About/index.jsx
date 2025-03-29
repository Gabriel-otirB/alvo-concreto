import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import PictureFrame from '../../components/PictureFrame';
import CallToMedia from './components/CallToMedia';
import Line from '../../components/Line';

import about_first from '../../assets/images/about/about-first.png';
import about_second from '../../assets/images/about/about-second.jpg';

const About = () => {
  return (
    <>
      <Container id="about-area-first">
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LogoTitle animation='slide-down' />
              </div>
              <div className="col-md-6">
                <PictureFrame><img src={about_first} alt="Concreteira Alvo Concreto" /></PictureFrame>
              </div>
              <div className="col-md-6">
                <MainTitle title='primary'>Sobre a Alvo Concreto</MainTitle>
                <ContentText> Na <strong>Alvo Concreto</strong>, acreditamos que a construção civil é muito mais do que erguer
                  estruturas é uma forma de dar vida a sonhos e ideias.
                  Com anos de experiência no mercado, somos reconhecidos pela nossa dedicação em oferecer concreto de alta
                  qualidade e serviços que atendem às mais diversas necessidades.
                  Nossas betoneiras, sempre presentes nas obras, representam a solidez e o compromisso de nossa empresa em
                  cada entrega realizada.</ContentText>
                <ContentText><span className='sm-remove'>Atendemos projetos de <strong>pequeno</strong>, <strong>médio</strong> e <strong>grande</strong> porte, oferecendo suporte técnico especializado e garantindo
                  que o concreto seja entregue no momento exato, preparado para uso imediato.
                  Entendemos que cada projeto é único, por isso trabalhamos lado a lado com nossos clientes para oferecer
                  soluções personalizadas que se adequem perfeitamente às suas demandas.
                  Nosso objetivo é ir além de apenas entregar concreto, queremos ser um <strong>parceiro estratégico</strong> na realização
                  do seu projeto, contribuindo para o sucesso de cada etapa.</span></ContentText>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container id="about-area-second">
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <MainTitle title='primary'>Construindo Sonhos</MainTitle>
                <ContentText>
                  Acreditamos que a <strong>construção civil</strong> não se limita a erguer estruturas,
                  ela também tem o poder de inspirar as novas gerações a sonharem grande.
                  Incentivar <strong>crianças e jovens</strong> a compreenderem mais sobre o concreto e sua importância é plantar a semente
                  de futuros idealizadores que transformarão suas ideias em realidade.
                  O concreto, quando utilizado com responsabilidade, é um instrumento poderoso para criar um mundo mais
                  sólido, funcional e sustentável.
                </ContentText>
                <ContentText>
                  <span className='sm-remove'>
                    Nosso compromisso vai além da entrega de concreto para obras de pequeno, médio e grande porte. Trabalhamos
                    para garantir que nossos processos sejam cada vez mais alinhados à preservação do meio ambiente,
                    contribuindo para que as futuras gerações herdem um planeta mais equilibrado e repleto de possibilidades.
                    Por meio de práticas sustentáveis e inovação constante, buscamos oferecer soluções que unem
                    <strong> qualidade</strong>, <strong>eficiência</strong> e respeito ao meio ambiente.
                  </span>
                </ContentText>
              </div>
              <div className="col-md-6">
                <PictureFrame><img src={about_second} alt="Concreteira Alvo Concreto" /></PictureFrame>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Line />
      <CallToMedia />
      <Line />
    </>
  )
}

export default About