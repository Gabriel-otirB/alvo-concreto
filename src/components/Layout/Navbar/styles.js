import styled from 'styled-components';

export const Header = styled.header`

height: 90px;
max-height: 90px;

.navbar {
  display: flex;
  justify-content: space-around; 
  align-items: center;
  padding: 0;
  background-color: var(--light-gray-color); 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
}

.navbar-brand i.logo-icon {
  justify-content: center;
  margin-left: 100px; 
  margin-right: 5px; 
  font-size: 30px; 
  --fa-animation-duration: 60s; 
}

.navbar-nav {
  margin-right: 100px;
}

.nav-link-custom {
  font-size: 22px; 
  font-weight: 600;
  margin-right: 20px; 
  position: relative;
  color: var(--bg-default-1); 
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease; 
  line-height: 1.4;
  white-space: nowrap;

  &.active {
    color: var(--red-color);

    &:hover {
      color: var(--red-color);
    }  

    &::after {
      background-color: var(--red-color); 
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%; 
    bottom: 6px; 
    width: 0;
    height: 3px;
    background-color: var(--bg-default-1); 
    transform: translateX(-50%); 
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--bg-default-1); 
    transform: scale(1.06); 
  
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
  margin-right: 0px;
  }
}

@media (max-width: 992px) { 

.nav-link-custom {
    line-height: 1.1;

    &::after {
    left: 52.5%; 
    bottom: 0.8px;
    }
}

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

@media (max-width: 375px) {
  button {
    margin-right: 0px;
  }

  .navbar-brand i.logo-icon {
    margin-left: 20px; 
    margin-right: 0px;
  }
}
`;

