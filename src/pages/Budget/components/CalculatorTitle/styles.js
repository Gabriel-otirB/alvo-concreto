import styled from 'styled-components';

export const Title = styled.div`

//Primary
.primary {
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.05;
  font-size: 54px;
  color: var(--light-gray-color);
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  position: relative;
  margin-top: -20px;
  margin-bottom: 30px;
  // Transition
  opacity: 0; 
  transform: translateY(60px); 
  animation: fadeInUp 0.3s ease-out forwards; 
}

@keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(60px); 
    }
    100% {
      opacity: 1;
      transform: translateY(0); 
    }
}

@media (max-width: 830px) {
  .primary {
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