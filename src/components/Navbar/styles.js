import styled from 'styled-components';

export const NavbarContainer = styled.header`

.navbar {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 20px 0; 
  background-color: var(--light-gray-color); 
}

.navbar-nav {
  margin-right: 40px;
}

.navbar-brand i.logo-icon {
  margin-left: 30px; 
  margin-right: 5px; 
  font-size: 2rem; 
  --fa-animation-duration: 60s; 
}

.nav-link-custom {
  font-size: 20px; 
  font-weight: 530;
  margin-right: 20px; 
  position: relative;
  color: var(--black-color); 
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease; 
}

.nav-link-custom::after {
  content: '';
  position: absolute;
  left: 50%; 
  bottom: 5px; 
  width: 0;
  height: 2px;
  background-color: var(--black-color); 
  transform: translateX(-50%); 
  transition: width 0.3s ease;
}

.nav-link-custom:hover {
  color: var(--black-color); 
  transform: scale(1.1); 
}

.nav-link-custom:hover::after {
  width: 100%; 
}

.logo {
  margin-left: 30px; 
}

nav .logo-text {
  font-size: 30px; 
  font-weight: bold;
}

nav .logo-text i{
  color: var(--red-color);
}

@media (max-width: 992px) { 
  .navbar-nav {
    margin-right: 0; 
    text-align: center; 
  }

  .logo {
  margin-left: 0px; 
  }

  button {
  margin-right: 10px;
  }

}
`;