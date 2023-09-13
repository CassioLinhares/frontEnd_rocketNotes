import { styled } from "styled-components";

import  BackgroundImg  from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items:  stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: bold;

        color: ${ ({theme}) => theme.COLORS.ORANGE };
    }

    > p{
        font-size: 1.4rem;
        color: ${ ({theme}) => theme.COLORS.BACKGROUND_100 };
        margin-bottom: 4.8rem;
    }

    > h2{
        font-size: 2.4rem;
        color: ${ ({theme}) => theme.COLORS.WHITE };
        margin-bottom: 4.8rem;
    }

    > a{
        margin-top: 12.4rem;
        color: ${ ({theme}) => theme.COLORS.ORANGE };
    }


`;

export const Background = styled.div`
    flex: 1 ;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    filter: sepia(70%) brightness(150%) saturate(130%)
`;
