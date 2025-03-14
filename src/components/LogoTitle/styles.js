import styled from 'styled-components';

export const Title = styled.div`
  .logo-title {
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px; 
    color: var(--light-gray-color);
    font-weight: bold;
    opacity: 0; 
    transform: translateY(-80px); 
    animation: fadeInDrop 1.2s ease-out forwards; 
  }

  .logo-text i {
    margin: 0 2px;
    color: var(--red-color);
  }

  @keyframes fadeInDrop {
    0% {
      opacity: 0;
      transform: translateY(-80px); 
    }
    100% {
      opacity: 1;
      transform: translateY(0); 
    }
  }
`;
