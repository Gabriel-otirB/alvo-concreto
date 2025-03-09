import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --bg-default-1: #0d0c0a;
  --bg-default-2: #131110;
  --black-color: #000;
  --light-gray-color: #EEE;
  --dark-gray-color: #212529;
  --gray-color: #666;
  --red-color: #910404;
  --dark-red-color: #700303;
  --green-color: #00aa00;
  --footer-dev-gray: #888888;
}

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: 0;
}  

html, body, #root {
  min-height: 100%;
}

body {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

`