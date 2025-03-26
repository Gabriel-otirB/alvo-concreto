import styled from 'styled-components';

export const Picture = styled.div`
  width: 97.5%;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 0 auto;
  padding: 0 10px;

  img {
    border: 3px solid var(--red-color);
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.025);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
  }

  // Rotate transition
  img.rotate {
  border-radius: 16px;
  border: 3px solid var(--red-color);
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
  will-change: transform;
  backface-visibility: hidden;
  image-rendering: smooth;

  &:hover {
  transform: scale(1.02) rotate(-0.5deg);
  }
}

 .slide {
    transition: transform 0.3s ease;
    border-radius: 20px;
    border: solid 0.2rem var(--red-color);
    transform: translateZ(0);

    &:hover {
    transform: translateY(-10px);
  }
}

  @media (max-width: 1400px) {
    height: 400px; 
    width: 98%;
  }

  @media (max-width: 768px) {
    display: none;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      height: auto; 
      justify-content: center;
      align-items: center;
    }
  }
`
