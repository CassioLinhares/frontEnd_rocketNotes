import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;

    margin-bottom: .8rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900 };
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };

    > input{
        border: none;
        outline: none;
        background-color: transparent;
        color: ${ ({theme}) => theme.COLORS.WHITE };

        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;

        &::placeholder{
            color: ${ ({theme}) => theme.COLORS.GRAY_300 }; 
        }
    }

    > svg{
        margin-left: 1.6rem;
    }
`;