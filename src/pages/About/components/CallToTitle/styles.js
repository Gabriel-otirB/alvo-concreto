import styled from 'styled-components';

export const Title = styled.div`

//Primary
.primary {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.05;
  font-size: 44px;
  color: var(--light-gray-color);
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  position: relative;
  margin-bottom: 11px;

  &::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--light-gray-color);
  transition: width 0.5s ease-in-out, left 0.5s ease-in-out;
  transform: translateX(-50%);
  }

  &:hover::after {
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  }
}

@media (max-width: 768px) {

  .primary {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 6px;
    font-size: 44px;
    margin-bottom: 12px;
    margin: 0 auto;
  }
}
`;