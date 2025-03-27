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

@media (max-width: 768px) {
  margin-top: -4px;
  margin-bottom: -24px;
  font-size: 22px;

  .service-benefits i,
  .service-benefits-2 i {
    font-size: 22px;
  }

  .service-benefits i { 
    margin-right: 10px;
  } 

  .service-benefits-2 i {
    margin-right: 6px;
  }
}

`