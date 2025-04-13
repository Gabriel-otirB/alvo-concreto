import styled from 'styled-components';

import backgroundDefault from '../../assets/images/background/background-1.png';

export const BudgetArea = styled.section`

  display: flex;
  justify-content: center; 
  align-items: center; 
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
    min-height: 80vh;
    z-index: 1;
    display: flex;
  }

  .wrapper-inputs {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
  }

  .left-wrapper {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    margin: 0 1% 0 auto;
  }

////////////////////////////////////////////////////////////////////////////////////////////////

.icon-wrapper {
  border: 4px solid var(--red-color);
  background-color: var(--light-gray-color);  /* Cor de fundo branca */
  padding: 5px 15px 5px 15px;  /* Espaçamento interno */
  border-radius: 15px;  /* Bordas arredondadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombras sutis */
  z-index: 1;
  max-width: 100%;
  margin-bottom: 14px;
}

.icon-container {
  display: flex;
  flex-direction: column;
}

.icon-row {
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid var(--dark-red-color); 
}

.icon-row:last-child {
  border-bottom: none; 
}

.icon-item {
  overflow: visible;
  border-right: 2px solid var(--dark-red-color);
  text-align: center;
  cursor: pointer;
  flex: 1; 

  &:last-child {
  border-right: none; 
  }

  i {
  font-size: 50px;
  margin-right: 5px;
  color: var(--red-color);
  transition: all 0.3s ease-in-out;
  }

  i.piso {
  rotate: 10deg;
  }

  small {
  display: inline-block;
  transition: all 0.3s ease-in-out;
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  color: var(--dark-gray-color);
  }

  &:hover i,
  &:hover small {
    color: var(--dark-red-color);
  }
}

button {
  border: none;
}

button.active {
  i, small {
    color: var(--dark-red-color);
  }
}

@media (max-width: 830px) {
  
  .left-wrapper {
    max-width: 90%;
    margin: 0 auto;
  }

  .wrapper-inputs {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  
}
`