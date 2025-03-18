import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 300px;
  margin: 0 auto;

  .service-box {
    position: relative;
    text-align: center;
    padding: 24px; 
    margin: 8px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;

    &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    }

    i {
    font-size: 25px;
    margin-bottom: 16px; 
    color: var(--dark-gray-color);
    transition: color 0.3s ease, transform 0.3s ease;
    }

    &:hover i {
    color: var(--black-color);
    transform: scale(1.1);
    }

    h4 {
    font-size: 28.8px; 
    margin-bottom: 12.8px; 
    color: var(--dark-gray-color);
    transition: color 0.3s ease;
    font-weight: 550;
    }

    &:hover h4 {
    color: var(--black-color);
    }

    /* Gradient */
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.15));
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
    }

    &:hover::before {
    opacity: 1;
    }

    p {
    font-size: 20px; 
    color: var(--gray-color, #666);
    line-height: 1.2;
    font-weight: 550;
    }

    .btn-saiba-mais {
    display: inline-block;
    margin-top: auto;
    padding: 13px 20px; 
    font-size: 17.6px; 
    color: #fff;
    background-color: var(--dark-gray-color);
    border-radius: 30px;
    text-transform: uppercase;
    font-weight: bold;
    transition: all 0.3s ease, transform 0.3s ease;
    margin-bottom: 16px; 

    &:hover {
    background-color: var(--red-color);
    transform: scale(1.05);
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 16px;
    max-width: 100%;
    margin: 0 auto;

    .service-box {
      max-width: 100%;
    }

    .btn-saiba-mais{
      width: 180px;
      margin: 0 auto;
    }
  }
`;
