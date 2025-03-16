import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import ContentList from '../../components/ContentList';
import DetailsButton from '../../components/DetailsButton';
import PictureFrame from '../../components/PictureFrame';

import about_image from '../../assets/images/about/about-section.jpg';

const Main = () => {
  return (
    <>
      <Carousel />
      <Container id="about-area">
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <LogoTitle />
              </div>
              <div className="col-md-6">
                {/* <PictureFrame ><img src={about_image} alt="Concreteira Alvo Concreto" /></PictureFrame> */}
                <PictureFrame ><img src={about_image} alt="Concreteira Alvo Concreto" /></PictureFrame>
              </div>

              <div className="col-md-6">
                <MainTitle>Conheça a Alvo Concreto</MainTitle>
                <ContentText><p>Na Alvo Concreto, transformamos o mercado da construção civil com soluções em concreto de
                  alta qualidade. Nosso objetivo é garantir a resistência e segurança das obras, usando as
                  melhores práticas e inovação tecnológica.</p></ContentText>
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
    </>
  )
}

export default Main;