import styled from 'styled-components';

export const ButtonArea = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;

.btn-custom {
  background-color: var(--red-color);
  color: var(--light-gray-color);
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  width: 300px
}

.btn-custom:hover {
  background-color: var(--dark-red-color);
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.025);
}

.btn-custom:active {
  background-color: var(--dark-red-color);  
  color: white;                              
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transform: scale(1.00);
}
`;