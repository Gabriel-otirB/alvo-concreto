import styled from 'styled-components';

export const Text = styled.p`

  margin: 6px 0 6px 0;
  color: var(--light-gray-color);
  font-weight: 500;
  line-height: 1.4;
  font-size: 20px;

  @media (max-width: 768px) {
    .small {
      display: none;
    }
  }
`