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

  ul {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  }
`