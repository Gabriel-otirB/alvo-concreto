import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import PictureFrame from '../../components/PictureFrame';
import TalkButton from './components/TalkButton';

const Services = () => {
  return (
    <Container id="service-entrega-concreto">
      <div className="bg-default">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LogoTitle />
            </div>
            <div className="col-md-6">
              <PictureFrame>
                <img className="img-fluid" src="./assets/img/services-concretagem.jpg"
                  alt="Entrega de Concreto pela Alvo Concreto" />
              </PictureFrame>
            </div>
            <div className="col-md-6">
              <MainTitle title='primary'>Serviços de Entrega de Concreto</MainTitle>
              <ContentText><p className="service-description"> Na Alvo Concreto,
                somos especializados em entrega pontual de concreto, atendendo obras de
                pequeno, médio e grande porte
                em qualquer lugar da cidade. Nosso objetivo é garantir a agilidade e
                eficiência
                que você precisa para o sucesso do seu projeto.
              </p></ContentText>
              <ul className="service-benefits">
                <li><i className="fa-solid fa-truck"></i> Entrega rápida e confiável.</li>
                <li><i className="fa-solid fa-cogs"></i> Concreto de alta qualidade para
                  diferentes
                  aplicações.</li>
                <li><i className="fa-solid fa-handshake"></i> Equipe dedicada e atendimento
                  personalizado.</li>
              </ul>
              <TalkButton/>
            </div>
            <div className="mg-bottom"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Services