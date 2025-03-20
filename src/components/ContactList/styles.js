import styled from 'styled-components'

export const Contact = styled.div`

margin-top: 10px;

ul li a {
  font-weight: 550;
  font-size: 18px;
  color: var(--light-gray-color);
  text-decoration: none;
}

ul li,
ul li a {
  transition: transform 0.3s ease, color 0.3s ease;
}

ul li:hover {
  color: var(--red-color);
  transform: translateX(5px);
}

 ul li a:hover {
  color: var(--red-color);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 0;
  margin-left: 0;

  li {
    justify-content: center;
    align-items: center;

    i {
    margin-right: 3px;
    width: 20px;
    height: 20px;
    color: var(--red-color);
    }
  }
}
`;