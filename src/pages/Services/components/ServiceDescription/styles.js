import styled from 'styled-components';

export const Description = styled.div`

  color: var(--light-gray-color);
  font-weight: 550;
  line-height: 1.5;
  font-size: 20px;
  margin: 0;
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
  }

.service-benefits i,
.service-benefits-2 i {
    font-size: 20px;
    color: var(--red-color);
    margin-right: 6px;
}

.service-benefits i { 
  animation: fa-beat 3s infinite;
} 

.service-benefits-2 i {
    animation: fa-flip 3s infinite;
}

`