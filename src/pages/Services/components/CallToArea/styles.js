import styled from 'styled-components';

export const CallToArea = styled.div`

  background: linear-gradient(0deg, var(--bg-default-2), var(--bg-default-1));
  padding: 80px 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;

 p {
    font-size: 34px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--light-gray-color);
}

 .main-btn {
    background-color: var(--red-color);
    color: var(--light-gray-color);
    font-size: 26px;
    font-weight: bold;
    padding: 12px 0px;
    border: none;
    width: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

 .main-btn:hover {
    background-color: var(--dark-red-color);
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

 .main-btn:active {
    background-color: var(--dark-red-color);
    transform: scale(1.05);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {

    padding: 14px 20px 20px 20px;

    p {
        line-height: 1.1;
    }

    .main-btn {
    background-color: var(--red-color);
    color: var(--light-gray-color);
    font-size: 26px;
    font-weight: bold;
    padding: 8px 0px;
    border: none;
    width: 300px;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 30px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
}

`