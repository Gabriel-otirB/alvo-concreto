import styled from 'styled-components';

export const List = styled.ul`

margin-top: 10px;
padding-left: 0;
margin-left: 0;
font-size: 20px;
font-weight: 550;
color: var(--light-gray-color);
display: flex;
flex-direction: column;

li {
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 100%;

  i {
  color: var(--green-color);
  }

  span {
  margin-left: 6px;
  }
}

@media (max-width: 768px) {

  font-size: 22px;

  li {
    justify-content: center;
  }
}
`;