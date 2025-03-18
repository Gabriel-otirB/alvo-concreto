import styled from 'styled-components';

import backgroundDefault from '../../assets/images/background/background-1.png';
import backgroundSecondary from '../../assets/images/background/background-2.png';

export const Template = styled.section`
  display: flex;
  justify-content: center; 
  align-items: flex-start; 
  width: 100%; 
  min-height: 80vh; 
  position: relative;

  .container {
    width: 100%; 
    padding: 34px 0 40px 0; 
    box-sizing: border-box; 
    max-width: 1400px; 
  }

  .bg-default {
    background-color: var(--bg-default-1);
    background-image: url(${backgroundDefault});
    background-size: cover;
    background-position: center;
    width: 100%;
    /* Remover height: 100% */
    min-height: 60vh; /* Ajustar a altura mínima, dependendo do conteúdo */
    z-index: 1;
  }

  .bg-secondary {
    background-color: var(--light-gray-color);
    background-image: url(${backgroundSecondary});
    background-size: cover;
    background-position: center;
    width: 100%;
    /* Remover height: 100% */
    min-height: 60vh; /* Ajustar a altura mínima */
  }

  @media (min-width: 1400px) {
    max-height: none;
  }

  @media (max-width: 768px) {
    .container {
      width: 100%;
      padding: 20px 20px 24px 20px;
      /* Se necessário, ajustar o padding para evitar espaços indesejados */
      box-sizing: border-box;
    }

    /* Ajustando o template para evitar quebras */
    display: block;
    align-items: unset; /* Remover alinhamento de flexbox para um layout de bloco */
    min-height: auto; /* Definir altura mínima como automática para que se ajuste ao conteúdo */
  }
`;
