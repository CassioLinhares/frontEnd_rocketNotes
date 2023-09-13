import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    border: none;
    border-radius: 1rem;
    display: block;

    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };

    padding: 2.2rem;
    margin-bottom: 1.6rem;

    > h1{
        font-size: 2.4rem;
        font-weight: 700;
        text-align: left;
        color: ${ ({theme}) => theme.COLORS.WHITE };

        flex: 1; //fill all possible space
    }

    > footer{
        width: 100%;
        display: flex;
        margin-top: 2.4rem;
    }
`;