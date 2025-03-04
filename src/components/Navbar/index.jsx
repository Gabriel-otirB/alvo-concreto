import { Header } from './styles'

const Navbar = () => {
  return (
    <Header>
      <div className="container nav-container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand d-flex align-items-center logo" href="#">
            <i className="fa-solid fa-helmet-safety fa-flip logo-icon"></i>
            <span className="logo-text">Alvo<i className="fa-solid fa-location-crosshairs"></i>Concreto</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link nav-link-custom" href="#">Início</a>
              <a className="nav-item nav-link nav-link-custom" href="#">Serviços</a>
              <a className="nav-item nav-link nav-link-custom" href="#">Contato</a>
              <a className="nav-item nav-link nav-link-custom" href="#">Orçamento</a>
              <a className="nav-item nav-link nav-link-custom" href="#"><span>Sobre nós</span></a>
            </div>
          </div>
        </nav>
      </div>
    </Header>
  )
}

export default Navbar