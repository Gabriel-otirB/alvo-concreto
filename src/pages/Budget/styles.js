import styled from 'styled-components';

import backgroundDefault from '../../assets/images/background/background-1.png';

export const BudgetArea = styled.section`

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

  /* CALCULATION AREA */

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
  color: var(--bg-default-1);
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

/* RESULT */
.rm-desktop {
  display: none;
}

.calculated-value {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-default-2);
  max-width: 60%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 3px solid var(--red-color);

  h2 {
    font-weight: bold;
    color: var(--light-gray-color);
    font-size: 40px;
    text-align: center;
  }

  strong {
    font-weight: 600;
    color: var(--red-color);
  }
}

.quote-buttons-area {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 16px; 
  margin: 20px 0;
}

.quote-buttons-area .col-md-6 {
  max-width: 400px;
  flex: 1;
  display: flex;
  justify-content: center;
}

.email-button,
.whatsapp-button {
  width: 100%;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  i {
    margin-right: 8px;
  }
}

.email-button {
  background-color: var(--light-gray-color);
  color: var(--red-color);
  border: 2px solid var(--red-color);
}

.email-button:hover {
  background-color: var(--red-color);
  color: var(--light-gray-color);
  scale: 1.02;
}

.whatsapp-button {
  background-color: var(--green-color);
  color: var(--light-gray-color);
  border: 2px solid var(--green-color);
}

.whatsapp-button:hover {
  border-color: var(--dark-green-color);
  scale: 1.02;
}

.send-quote {
  display: none;
  margin: 0 auto;
  color: var(--light-gray-color);
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}


@media (max-width: 830px) {
  .rm-mobile {
    display: none;
  }

  .rm-desktop {
    display: flex;
  }

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

  .calculated-value {
    max-width: 90%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 3px solid var(--red-color);

  h2 {
    font-weight: bold;
    color: var(--light-gray-color);
    font-size: 34px;
    }
  }

  .quote-buttons-area { 
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .email-button,
  .whatsapp-button { 
    width: 90%;
  }

  .whatsapp-button {
    margin-left: -20px;
  }

  .email-button {
    margin-right: -20px;
  }

  .send-quote { 
    display: flex;
    max-width: 90%;
  }
}

`