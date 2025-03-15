import styled from 'styled-components';

export const Section = styled.section`

.carousel-inner,
.carousel-item {
  height: 80vh;
  overflow: hidden;
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

  &:hover {
  filter: brightness(65.0%);
  }
}

.carousel-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-align: center;
  z-index: 1;
  max-width: 90%;
  padding: 20px;
  color: var(--light-gray-color);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  pointer-events: none;

  h5 {
  max-width: 700px;
  line-height: 0.9;
  color: var(--light-gray-color);
  font-size: 70px; 
  font-weight: bold;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 1);
  }

  p {
  max-width: 700px;
  line-height: 1.1;
  color: var(--light-gray-color);
  font-size: 32px; 
  font-weight: 700;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 1);
  }
}

/* Button */
.main-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 36px; 
  background-color: var(--light-gray-color);
  color: var(--black-color);
  border-color: var(--black-color);
  text-transform: uppercase;
  width: 280px; 
  height: 60px; 
  padding: 8px 8px; 
  border-radius: 54px; 
  border: 5px solid transparent; 
  font-size: 24px; 
  font-weight: bold;
  transition: transform 0.3s ease-in-out, background-color 0.5s ease, border-color 0.5s ease;
  pointer-events: all;

  &:hover {
  transform: scale(1.06);
  color: var(--light-gray-color);
  background-color: var(--bg-default-1);
  border-color: var(--bg-default-1);
  }
}

/* Indicators */
.carousel-indicators {
  bottom: 18px; 
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px; 
  margin: 0 auto;
  background-color: var(--light-gray-color);
  border-radius: 54px;
  max-width: 200px;
  height: 36px;
  opacity: 0.7;

  button {
  width: 25px; 
  height: 25px; 
  border-radius: 50%;
  opacity: 0.7;
  background-color: var(--red-color);
  transition: all 0.3s;

  &.active {
  background-color: var(--red-color);
  opacity: 1;
  }

  &:hover {
  opacity: 1;
  transform: scale(1.1);
  } 
}
}

/* Responsivity */
@media (max-width: 768px) {

  .carousel-indicators { 
    gap: 20px; 
    height: 34px;
    width: 180px;
  }

  .carousel-caption h5 {
    font-size: 56px;
  }

  .main-btn { 
    font-size: 22px;
    text-wrap: nowrap;
    margin-top: 20px;
    width: 250px;
  }

  p {
    display: none;
  }
}
`;

