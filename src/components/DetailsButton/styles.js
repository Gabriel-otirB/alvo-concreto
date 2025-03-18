import styled from 'styled-components';

export const Button = styled.div`
  
  display: flex;
  justify-content: start;
  align-items: center;

.btn-saiba-mais {
  display: flex;
  align-items: start;
  justify-content: center;
  max-width: 220px;
  width: 220px;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 22px;
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

@media (max-width: 768px) {

  justify-content: center;
  
  .btn-saiba-mais {
    width: 180px;
    justify-content: center;
    padding: 8px 16px;
  }
}

`;