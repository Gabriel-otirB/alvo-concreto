import { FooterArea } from './styles';

const Footer = () => {
  return (
    <FooterArea id="footer-area">
      <div className="div-line"></div>
      <div className="footer-content">
        <div className="container">
          <div className="row text-center">
            {/* Contact  */}
            <div className="col-md-6 mb-3">
              <h4>Contato</h4>
              <ul className="footer-contact">
                <li>
                  <a href="tel:+5521012345678" target="_blank">
                    <i className="fas fa-phone-alt"></i>(21) 01234-5678
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@alvoconcreto.com.br">
                    <i className="fas fa-envelope"></i>contato@alvoconcreto.com.br
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/6qxQfBtYhEqdrSuo6" target="_blank">
                    <i className="fas fa-map-marker-alt"></i>Rua da Construção, 123, Centro, Rio de Janeiro, RJ
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="col-md-6 mb-3">
              <h4>Siga-nos</h4>
              <ul className="footer-socials">
                <li><a href="https://www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i>Facebook</a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i>Instagram</a></li>
                <li><a href="https://br.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i>LinkedIn</a></li>
                <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i>Youtube</a></li>
              </ul>
            </div>
          </div>
          <div className="row text-center mt-3">
            <div className="col-md-12 dev">
              <p>Desenvolvido por <a href="https://github.com/Gabriel-otirB"
                target="_blank">Gabriel-otirB</a>
                &copy; 2024</p>
            </div>
          </div>
        </div>
      </div>
    </FooterArea>
  )
}

export default Footer;