import styled from 'styled-components';

export const NavbarContainer = styled.header`

.navbar {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 0;
  background-color: var(--light-gray-color); 
}

.navbar-brand i.logo-icon {
  justify-content: center;
  margin-left: 100px; 
  margin-right: 5px; 
  font-size: 2rem; 
  --fa-animation-duration: 60s; 
}

.navbar-nav {
  margin-right: 100px;
}

.nav-link-custom {
  font-size: 20px; 
  font-weight: 600;
  margin-right: 20px; 
  position: relative;
  color: var(--black-color); 
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease; 
  line-height: 1.5;
  white-space: nowrap;

  &::after {
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

  &:hover {
    color: var(--black-color); 
    transform: scale(1.1); 

  &::after {
    width: 100%; 
    }
  }
}


.logo {
  margin-left: 30px; 

  .logo-text {
    font-size: 30px; 
    font-weight: bold;
    display: flex;
    align-items: center;
    min-height: 80px;

    i {
    color: var(--red-color);
    }
  }
}

@media (max-width: 1108px) {
.nav-link-custom {
  white-space: nowrap;
  }
}

@media (max-width: 992px) { 

.navbar-brand i.logo-icon {
  margin-left: 30px; 
}

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

