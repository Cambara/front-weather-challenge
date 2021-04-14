import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        
        box-sizing: border-box;
        font-family: "Proxima nova", sans-serif;
    }
    html, body, #root {
        width: 100%;
        height: 100%; 
        background-color: #fbfbfb;
    }
    body {
        -webkit-font-smoothin: antialiased !important;
        overflow-x: hidden;
        
        /* background-image: linear-gradient(
        to bottom right,
        #200f26,
        #21102b,
        #211031,
        #221036,
        #23113b,
        #231140,
        #231144,
        #231148,
        #24124d,
        #251252,
        #251252,
        #24114f,
        #23114d,
        #22114b,
        #211148,
        #211146,
        #201144,
        #1f1040,
        #1e103d,
        #1d103a
  ); */
    }
    a, button, input {
        border: 0;
        outline: 0;
        text-decoration: none;  
        }
        a {
            color: black;
        }
        ul, li  {
            list-style: none;
        }
    :root {
        --purpleSecondary: rgba(85, 78, 113, 0.2);
        --purpleGrey: rgba(85, 78, 113, 0.4);
        --purpleGreySecondary: #554e71;
        --purpleGreyTerciary: #797879;
        --white: #ffffff;
        --whiteSecondary: #9b9b9b;
        
        --greenPrimary: #59d88f;
    }
`;