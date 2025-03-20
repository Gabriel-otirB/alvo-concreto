import styled from 'styled-components';

export const Title = styled.div`

//Primary
.primary {
  font-size: 54px;
  color: var(--light-gray-color);
  text-transform: uppercase;
  font-weight: bold;
  text-align: left;
  position: relative;
  margin-bottom: 11px;
  line-height: 1.05;

  &::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--light-gray-color);
  transition: width 0.5s ease-in-out;
  }

  &:hover::after {
  width: 100%;
  }
}

@media (max-width: 768px) {

  .primary {
    text-align: center;
    font-size: 48px;
    margin-bottom: 12px;

    &::after {
    left: 50%;
    transition: width 0.5s ease-in-out, left 0.5s ease-in-out;
    transform: translateX(-50%);
    }

    &:hover::after {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    }
  }
}

// Secondary
.secondary {
  font-size: 60px;
  color: var(--dark-gray-color);
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-bottom: 24px;
  line-height: 1.05;
  opacity: 0; 
  transform: translateY(-80px); 
  animation: fadeInDrop 1.2s ease-out forwards; 

  &::after {
  content: "";
  border-radius: 20px;
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 0;
  height: 4px;
  background-color: var(--dark-gray-color);
  transition: 0.8s all;
  transform: translateX(-50%);
  }

  &:hover::after {
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}

}

@keyframes fadeInDrop {
    0% {
      opacity: 0;
      transform: translateY(-80px); 
    }
    100% {
      opacity: 1;
      transform: translateY(0); 
    }
}

@media (max-width: 768px) {

  .secondary {
    text-align: center;
    font-size: 48px;
    margin-bottom: 12px;
  }
}
`;