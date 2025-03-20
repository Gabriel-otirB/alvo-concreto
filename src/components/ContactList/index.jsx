import { Contact } from './styles';

const ContactList = () => {
  return (
    <Contact>
      <ul>
        <li>
          <a href="tel:+5521012345678" target="_blank">
            <i className="fas fa-phone-alt"></i>
            <strong>Telefone:</strong> (21) 01234-5678
          </a>
        </li>
        <li>
          <a href="mailto:contato@alvoconcreto.com.br">
            <i className="fas fa-envelope"></i>
            <strong>E-mail:</strong> contato@alvoconcreto.com.br
          </a>
        </li>
        <li>
          <a href="https://maps.app.goo.gl/6qxQfBtYhEqdrSuo6" target="_blank">
            <i className="fas fa-map-marker-alt"></i>
            <strong>Endereço:</strong> Rua da Construção, 123, Centro, Rio de Janeiro, RJ
          </a>
        </li>
        <li>
          <a href="https://wa.me/5521012345678?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Alvo%20Concreto!"
            target="_blank">
            <i className="fab fa-whatsapp"></i>
            <strong>WhatsApp:</strong> (21) 01234-5678
          </a>
        </li>
      </ul>
    </Contact>
  )
}

export default ContactList;