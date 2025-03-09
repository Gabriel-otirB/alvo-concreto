import styled from 'styled-components';

export const Section = styled.section`
  /* Ajustando as imagens */
.carousel-inner, .carousel-item {
  height: 90vh;
  overflow: hidden;
  position: relative;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  transition: filter 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.carousel-item img:hover {
  filter: brightness(65.0%);
}

/* Legendas */
.carousel-caption {
  position: absolute;
  top: 50%; /* Centraliza o texto verticalmente */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10; /* Garante que o texto fique acima da imagem */
  max-width: 90%;
  padding: 20px;
  color: var(--light-gray-color);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
}

.carousel-caption h5 {
  color: var(--light-gray-color);
  font-size: 58px;
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 1);
}

.carousel-caption h5.mobile-title {
  display: none;
}

.carousel-caption p {
  color: var(--light-gray-color);
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 1);
}

/* Botão */
.main-btn {
  background-color: var(--light-gray-color);
  color: var(--black-color);
  border-color: var(--black-color);
  text-transform: uppercase;
  width: 18rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  border: 0.3rem solid transparent;
  font-size: 1.3rem;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  line-height: 2rem;
  transition: transform 0.3s ease-in-out, background-color 0.5s ease, border-color 0.5s ease;
  pointer-events: all;
}

.main-btn:hover {
  transform: scale(1.1);
  color: var(--light-gray-color);
  background-color: var(--black-color);
  border-color: var(--black-color);
}

/* Indicadores */
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
}

.carousel-indicators button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.3s;

  &.active {
    opacity: 1;
  }
}

.carousel-indicators button:hover {
  opacity: 1;
  transform: scale(1.15);
}

/* Remover setas de navegação */
.carousel-control-prev, .carousel-control-next {
  display: none;
}

/* Ajustes responsivos */
@media (max-width: 900px) {
  .carousel-caption {
    top: 45%; /* Ajusta a posição vertical do texto em telas menores */
    max-width: 80%;
    padding: 0.5rem;
  }

  .carousel-caption h5 {
    font-size: 2.5rem;
  }

  .carousel-caption p {
    font-size: 1.4rem;
  }

  .main-btn {
    width: 14rem;
    height: 3rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .carousel-indicators button {
    width: 0.75rem;
    height: 0.75rem;
  }
}

@media (max-width: 768px) {
  .carousel-caption {
    top: 50%; /* Ajusta a posição vertical do texto em telas menores */
    max-width: 80%;
    padding: 0.5rem;
    z-index: 20;
  }

  .carousel-caption h5 {
    font-size: 2rem;
  }

  .carousel-caption p {
    font-size: 1.4rem;
  }

  .main-btn {
    width: 14rem;
    height: 3rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  .carousel-indicators button {
    width: 0.75rem;
    height: 0.75rem;
  }
}

@media (max-width: 710px) {
  .carousel-caption {
    top: 50%; /* Ajusta a posição vertical do texto em telas menores */
    max-width: 80%;
    padding: 0.5rem;
    z-index: 20;
  }

  .carousel-caption h5 {
    font-size: 1.9rem;
  }

  .carousel-caption p {
    font-size: 1.1rem;
  }

  .main-btn {
    width: 11rem;
    height: 3.5rem;
    font-size: 1.1rem;
    line-height: 1rem;
  }

  .carousel-indicators button {
    width: 0.75rem;
    height: 0.75rem;
  }
}

@media (max-width: 582px) {
  .carousel-caption {
    top: 50%; /* Ajusta a posição vertical do texto em telas menores */
    max-width: 80%;
    padding: 0.5rem;
    z-index: 20;
  }

  .carousel-caption h5 {
    font-size: 2.5rem;
  }

  .carousel-caption h5.default-title {
    display: none;
  }
  .carousel-caption h5.mobile-title {
    display: flex;
  }

  .carousel-caption p {
    font-size: 1.4rem;
    display: none;
  }

  .main-btn {
    width: 7.7rem;
    height: 3.8rem;
    font-size: 1rem;
    padding-left: 5px;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .carousel-indicators button {
    width: 0.75rem;
    height: 0.75rem;
  }
}
`;