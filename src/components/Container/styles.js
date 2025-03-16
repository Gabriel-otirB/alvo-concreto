import styled from 'styled-components';

import backgroundDefault from '../../assets/images/background/background-1.png';
import backgroundSecondary from '../../assets/images/background/background-1.png';

export const Template = styled.section`

  .container {
  min-width: 80vh;
  max-height: none;
  padding: 34px 0 30px 0;
  }

  .bg-default {
  background-color: var(--bg-default-1);
  background-image: url(${backgroundDefault});
  background-size: cover;
  background-position: center;
}

.bg-secondary {
  background-color: var(--light-gray-color);
  background-image: url(${backgroundSecondary});
  background-size: cover;
  background-position: center;
}

@media (min-width: 1400px) {
  max-height: 82vh;
}

@media (max-width: 768px) {
    .container {
      min-width: 100%;
      padding: 20px;
      max-height: none;
    }
  }
`;
