import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: "header" "content";

    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 0;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li{
        font-size: 1.6rem;
        margin-top: 1.2rem;
    }

    a{
        color: ${ ({theme}) => theme.COLORS.WHITE };
    }
`;

export const Content = styled.div`
    max-width: 55rem;
    margin: auto;

    display: flex;
    flex-direction: column;

    > button:first-child{
        align-self: flex-end;
    }

    > h1{
        font-size: 3.6rem;
        font-weight: 500;
        color: ${ ({theme}) => theme.COLORS.WHITE };

        padding-top: 6.4rem;
        margin-bottom: 1.6rem;
    }

    >p{
        font-size: 1.6rem;
        color: ${ ({theme}) => theme.COLORS.WHITE };
        text-align: justify;
    }
`;