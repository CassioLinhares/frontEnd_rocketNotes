import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        outline: none;

        -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
    }

    a{
        text-decoration: none;
    }

    a,
    button{
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover,
    button:hover{
        filter: brightness(0.9);
    }

    
     /* Change scroll color */
     &::-webkit-scrollbar {
        width: 12px;
    }
    /* Scroll bar background color */
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    /* Slider color (thumb) */
    &::-webkit-scrollbar-thumb {
        background-color: ${ ({theme}) => theme.COLORS.GRAY_300 };  
        border-radius: 6px;
    }
`;