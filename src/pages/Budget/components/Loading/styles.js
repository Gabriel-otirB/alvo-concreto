import styled from 'styled-components';

export const LoadingArea = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 50%;
padding: 20px 0;
background-color: var(--bg-default-1);
border: 2px solid var(--red-color);
border-radius: 25px;
/* Animação */
animation: fadeInUp 0.3s ease-out forwards;

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

// Text Loading
h3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  font-size: 44px;
  color: var(--light-gray-color);
  text-transform: uppercase;
  font-weight: bold;
}

// Helmet
i.logo-icon {
  margin: auto 0;
  color: var(--light-gray-color);
  justify-content: center;
  align-items: center;
  margin-right: 10px; 
  font-size: 30px; 
  --fa-animation-duration: 1.5s; 
}

@media (max-width: 830px) {
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 46px;
    margin-bottom: 12px;
    margin: 0 auto;
  }
}
`;