import styled from 'styled-components';

export const Service = styled.div`

  display: flex;
  flex-direction: row;
  color: var(--light-gray-color);
  font-weight: 550;
  line-height: 1.5;
  font-size: 20px;
  margin: 0;
  padding: 0 20px;

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  }

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

@media (max-width: 768px) {
  .service-benefits i { 
    font-size: 18px;
  }

  .service-benefits-2 i { 
    font-size: 22px;
  }
}
`