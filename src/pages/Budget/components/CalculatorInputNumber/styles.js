import styled from 'styled-components';

export const InputArea = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
max-width: 100%;

input{
  font-weight: bold;
  color: var(--dark-gray-color);
  font-size: 18px;
  margin-bottom: 15px;
}

 label {
  display: flex;
  justify-content: center;
  color: var(--light-gray-color);
  font-size: 20px;
  font-weight: bold;
}

.input-custom-number {
  padding: 10px;
  border: 1px solid var(--light-gray-color);
  border-radius: 20px;
  font-size: 16px;
  background-color: var(--light-gray-color);
  color: var(--dark-gray-color);
  transition: all 0.3s ease-in-out;
  border: 3px solid var(--dark-red-color);
  text-align: center;
}

.input-custom-number:focus {
  outline: none;
  border-color: var(--red-color);
  box-shadow: 0 0 5px var(--red-color);
}
`;