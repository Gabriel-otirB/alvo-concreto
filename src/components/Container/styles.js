import styled from 'styled-components';

import backgroundDefault from '../../assets/images/background/background-1.png';
import backgroundSecondary from '../../assets/images/background/background-1.png';

export const Template = styled.section`

  .container {
  min-width: 80vh;
  max-height: 90vh;
  padding: 30px 0 34px 0;
  }

  .bg-default {
  background-color: var(--bg-default-1);
  background-image: url(${backgroundDefault});
  background-size: cover;
  background-position: center;
}

.bg-secondary {
  background-color: var(--light-gray-color);
  background-image: url(${backgroundSecondary});
  background-size: cover;
  background-position: center;
}

#about-area ul li i {
  color: var(--green-color);
}

#about-area .row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#about-area .col-md-6 img {
  border: 0.2rem solid var(--red-color);
  width: 80%;
  max-width: 650px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-left: 40px;
}

#about-area .col-md-6 img:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

/* Lista na Seção "about-area" */
ul#about-list {
  padding-left: 0;
  margin-left: 0;
}

ul#about-list li {
  margin-left: 0;
  padding-left: 1rem;
  position: relative;
}

ul#about-list li i {
  font-size: 1.5rem;
}

ul#about-list li span {
  margin-left: 0.3rem;
}

/* Estilização do botão na área "sobre" */
#about-area .btn-saiba-mais {
  display: inline-block;
  margin-top: 0.25rem;
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  color: #fff;
  background-color: var(--red-color);
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

#about-area .btn-saiba-mais:hover {
  background-color: var(--red-color);
  /* Cor de fundo ao passar o mouse */
  transform: scale(1.05);
  /* Aumento do botão ao passar o mouse */
}

#about-area .btn-saiba-mais:active {
  transform: scale(1.02);
  /* Aumento do botão ao passar o mouse */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
`;
