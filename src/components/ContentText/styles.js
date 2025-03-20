import styled from 'styled-components';

export const Text = styled.p`
    
    margin: 6px 0;
    color: var(--light-gray-color);
    font-weight: 550;
    line-height: 1.4;
    font-size: 20px;

    span {
      display: inline-block;
      margin: 6px 0;
    }
  
  @media (max-width: 768px) {
    .small {
      display: none;
    }
  }

  @media (max-width: 768px) {
   
    line-height: 1.2;
    text-align: center;
    font-size: 22px;
  
  .sm-remove {
    display: none;
    }
  }
`