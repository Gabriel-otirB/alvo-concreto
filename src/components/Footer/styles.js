import styled from 'styled-components';

import backgroundImage from '../../assets/images/background/background-2.png';

export const FooterArea = styled.footer`

.footer-content {
    background-image: url(${backgroundImage});
    color: var(--light-gray-color);
    padding: 40px 0;
    background-size: cover; 
    background-position: bottom;

    h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--dark-gray-color);
    text-transform: uppercase;
    text-align: center;
    }

    i {
    color: var(--red-color);
    margin-right: 5px;
        }
    }

    p {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    color: var(--footer-dev-gray);
    }

    .footer-contact,
    .footer-socials {
    list-style: none;
    padding: 0;
    text-align: center;
    margin: 0 auto;
    }

    .footer-contact li,
    .footer-socials li {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--dark-gray-color);
    }

    .dev a {
    color: var(--red-color);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.5s ease;
    margin-right: 4px;

    &:hover {
    color: var(--dark-gray-color);
    text-decoration: none;
    }
}

.footer-contact li {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
    color: var(--dark-gray-color);
    text-decoration: none;
    font-size: 16px;
    transition: color 0.5s ease;

    &:hover {
    color: var(--red-color);
        }
    }
}

.footer-socials li {
    display: inline-block;
    margin: 0 15px;

    a {
    color: var(--dark-gray-color);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.5s ease;

    &:hover {
    color: var(--red-color);
        }
    }
}

`