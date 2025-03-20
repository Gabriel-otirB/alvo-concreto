import styled from 'styled-components'

export const Schedule = styled.div`

h4 {
  position: relative;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: var(--light-gray-color);
  text-transform: uppercase;
  margin-bottom: 12px;
  margin-top: 32px;

  &::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 3px;
  background-color: var(--light-gray-color);
  bottom: -5px;
  left: 0;
  transition: width 0.6s ease;
  border-radius: 20px;
  }

  &:hover::after {
  width: 100%;
  }
}

ul li a {
  font-weight: 550;
  font-size: 18px;
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
  padding: 0;
  margin: 0;

  li {
    justify-content: center;
    align-items: center;
    color: var(--light-gray-color);
    font-weight: 550;

    i {
    margin-right: 3px;
    width: 20px;
    height: 20px;
    color: var(--red-color);
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;

    h4 {
      margin-top: 0px;
    }
  }
}
`;