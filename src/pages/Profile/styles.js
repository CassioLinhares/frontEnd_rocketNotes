import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header{
        width: 100%;
        height: 14.4rem;

        display: flex;
        align-items: center;
        padding: 0 14.4rem;

        background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };
    }

    .btnReturn{
        border: none;
        background: none;
    }

    svg{
        font-size: 2.4rem;
        color: ${ ({theme}) => theme.COLORS.WHITE};
    }
    

`;

export const Form = styled.form`
    max-width: 34rem;
    margin: 3rem auto 0;

    > div:nth-child(3){ // space between input Email and password
        margin-top: 2.4rem;
    }
`;

export const Avatar = styled.div`
    width: 18.6rem;
    height: 18.6rem;

    margin: -11rem auto 4rem;

    position: relative;

    > img{
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    > label{
        border-radius: 50%;
        background-color: ${ ({theme}) => theme.COLORS.ORANGE };

        display: flex;
        align-items: center;
        justify-content: center;

        width: 4.8rem;
        height: 4.8rem;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        cursor: pointer;
        
        input{
            display: none;
        }

        svg{
            width: 2rem;
            height: 2rem;
            color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
        }
    }
`;