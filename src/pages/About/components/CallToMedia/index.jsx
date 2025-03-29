import { CallToArea } from './styles'
import ContentText from '../../../../components/ContentText';
import CallToTitle from '../CallToTitle';

const CallToMedia = () => {

  return (
    <CallToArea>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <CallToTitle title='primary'>ACOMPANHE NOSSAS ATUALIZAÇÕES</CallToTitle>
            <ContentText className="service-description">
              Conecte-se com a <strong>Alvo Concreto</strong> e fique por dentro de novidades, dicas sobre construção
              civil, sustentabilidade e projetos inspiradores.
              Acompanhe como ajudamos a transformar sonhos em realidade e participe da nossa jornada para construir um
              futuro sólido e sustentável.
            </ContentText>
            <ContentText>
              Estamos presentes nas principais redes sociais:
              <a href="https://www.facebook.com" target="_blank" className="social-link"><i
                className="fa-brands fa-facebook"></i> Facebook</a>,
              <a href="https://www.instagram.com" target="_blank" className="social-link"><i
                className="fa-brands fa-instagram"></i> Instagram</a>,
              <a href="https://www.linkedin.com" target="_blank" className="social-link"><i
                className="fa-brands fa-linkedin"></i> LinkedIn</a> e
              <a href="https://www.youtube.com" target="_blank" className="social-link"><i className="fa-brands fa-youtube"></i>
                YouTube</a>.
              Siga-nos e acompanhe nossas atualizações!
            </ContentText>
          </div>
        </div>
      </div>
    </CallToArea>
  )
}

export default CallToMedia;
