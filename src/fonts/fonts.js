import {
    createGlobalStyle
}
from 'styled-components';
import Oswald from './Oswald.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: "Oswald";
        src: local('Oswald'),
            url(${Oswald}) format('tff');
            font-weight: 300;
            font-style: normal;
    }
`