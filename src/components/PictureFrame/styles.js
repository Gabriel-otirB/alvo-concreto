import styled from 'styled-components';

export const Picture = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start; 
  align-items: start;

  img {
    border: 3px solid var(--red-color);
    width: 88%;
    height: 90%; 
    margin-left: 15%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    object-fit: cover;

    &:hover {
      transform: scale(1.025);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }
  }

  @media (max-width: 1400px) {
    height: 100%;
    width: 95%;
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
