import styled from 'styled-components';

export const CallToArea = styled.div`

  background: linear-gradient(0deg, var(--bg-default-2), var(--bg-default-1));
  padding: 80px 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;

  a {
  margin-left: 10px;
  color: var(--red-color);
  transition: all 0.3s;
 }

  a:hover {
  color: var(--dark-red-color);
 }

@media (max-width: 768px) {
    padding: 14px 20px 20px 20px;
    p {
        line-height: 1.1;
    }
}

`