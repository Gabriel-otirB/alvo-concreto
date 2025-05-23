import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './styles';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const collapseNavbar = () => {
    if (window.innerWidth < 992) {
      const navbar = document.getElementById('navbarNavAltMarkup');
      const bsCollapse = new window.bootstrap.Collapse(navbar, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <Header>
      <div className="container nav-container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <a className="navbar-brand d-flex align-items-center logo" href="/">
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
              <NavLink
                className={({ isActive }) => isActive ? "nav-item nav-link nav-link-custom active" : "nav-item nav-link nav-link-custom"}
                onClick={collapseNavbar}
                to="/"
              >
                Início
              </NavLink>

              <NavLink
                className={({ isActive }) => isActive ? "nav-item nav-link nav-link-custom active" : "nav-item nav-link nav-link-custom"}
                onClick={collapseNavbar}
                to="/services"
              >
                Serviços
              </NavLink>

              <NavLink
                className={({ isActive }) => isActive ? "nav-item nav-link nav-link-custom active" : "nav-item nav-link nav-link-custom"}
                onClick={collapseNavbar}
                to="/budget"
              >
                Orçamento
              </NavLink>

              <NavLink
                className={({ isActive }) => isActive ? "nav-item nav-link nav-link-custom active" : "nav-item nav-link nav-link-custom"}
                onClick={collapseNavbar}
                to="/contact"
              >
                Contato
              </NavLink>

              <NavLink
                className={({ isActive }) => isActive ? "nav-item nav-link nav-link-custom active" : "nav-item nav-link nav-link-custom"}
                onClick={collapseNavbar}
                to="/about"
              >
                Sobre nós
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </Header>
  )
}

export default Navbar;
