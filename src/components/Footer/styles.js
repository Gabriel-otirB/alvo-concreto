import styled from 'styled-components';

import backgroundImage from '../../assets/images/background/background-2.png';

export const FooterArea = styled.footer`

.footer-content {
    background-image: url(${backgroundImage});
    color: var(--light-gray-color);
    padding: 40px 0;
    background-size: cover; 
    background-position: bottom;
}

.footer-content h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--dark-gray-color);
    text-transform: uppercase;
    text-align: center;
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

.footer-socials i {
    color: var(--red-color);
    margin-right: 5px;
}

.footer-contact i {
    color: var(--red-color);
    margin-right: 5px;
}

.footer-contact li {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer-socials li {
    display: inline-block;
    margin: 0 15px;
}

.footer-socials a {
    color: var(--dark-gray-color);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.5s ease;
}

.footer-socials a:hover {
    color: var(--red-color);
}

.footer-contact a {
    color: var(--dark-gray-color);
    text-decoration: none;
    font-size: 16px;
    transition: color 0.5s ease;
}

.footer-contact a:hover {
    color: var(--red-color);
}

.footer-content .text-center p {
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
    color: var(--footer-dev-gray);
}

.footer-content .dev a {
    color: var(--red-color);
    font-weight: bold;
    text-decoration: none;
    transition: color 0.5s ease;
    margin-right: 4px;
}

.footer-content .dev a:hover {
    color: var(--dark-gray-color);
    text-decoration: none;
}

`