import styled from 'styled-components';

export const Button = styled.div`
  
.btn-saiba-mais {
  display: flex;
  max-width: 176px;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-size: 21px;
  color: #fff;
  background-color: var(--red-color);
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;

&:hover {
  transform: scale(1.05);
  }

&:active {
  transform: scale(1.02);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
}
`;