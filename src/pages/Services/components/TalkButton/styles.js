import styled from 'styled-components';

export const TeamButton = styled.div`

  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 30px;

 a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  text-align: center;
  padding: 10px 10px;
  font-size: 21px;
  color: #fff;
  background-color: var(--red-color);
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
  background-color: var(--red-color);
  transform: scale(1.05);
  }

  &:active {
  background-color: var(--dark-red-color);
  transform: scale(1.03);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 15px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
     }
  }
}
`