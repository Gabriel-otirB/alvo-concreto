import styled from 'styled-components';

export const Layout = styled.div`
  .map-container {
  position: relative;
  width: 100%;
  height: 300px; 
  margin-top: 2rem; 
  margin-bottom: 38px;
  border-radius: 16px; 
  overflow: hidden; 
  border: 3px solid var(--red-color); 
}

  .map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  border-radius: 1rem; 
}

@media (max-width: 640px) {
  .map-container {
    margin-bottom: 16px;
  }
}
`;