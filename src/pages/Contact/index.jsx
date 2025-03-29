import Container from '../../components/Container';
import Line from '../../components/Line';
import LogoTitle from '../../components/LogoTitle';
import MainTitle from '../../components/MainTitle';
import ContentText from '../../components/ContentText';
import ContactList from '../../components/ContactList';
import OpeningHour from '../../components/OpeningHour';

import contact_team_image from '../../assets/images/contact/contact-team.jpg';
import Map from './components/Map';
import ContactPicture from './components/ContactPicture';

const Contact = () => {
  return (
    <>
      <Container id="contact-area">
        {/* <!-- CONTACT --> */}
        <div className="bg-default">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="main-title">
                  <LogoTitle animation='slide-down' />
                </h3>
              </div>
              {/* <!-- Informações de Contato --> */}
              <div className="col-md-6">
                <MainTitle title='primary'>ENTRE EM CONTATO COM A NOSSA EQUIPE</MainTitle>
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
                <ContactPicture><img className="rotate small" src={contact_team_image} alt="Concreteira Alvo Concreto" /></ContactPicture>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Line />
    </>
  )
}

export default Contact