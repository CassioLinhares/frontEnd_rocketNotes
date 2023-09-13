import  styled  from "styled-components";

export const Container = styled.div`
    padding-right: 1.8rem;
    margin-bottom: .8rem;

    display: flex;
    align-items: center;

    background-color: ${ ({theme, isNew}) => isNew ? `transparent` : theme.COLORS.BACKGROUND_900 };
    color: ${ ({theme}) => theme.GRAY_300 };

    border:  ${ ({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" };
    border-radius: 1rem;

    > button{
        border: none;
        background: none;
    }

    .button_delete{
        color: ${ ({theme}) => theme.COLORS.RED };
    }

    .button_add{
        color: ${ ({theme}) => theme.COLORS.ORANGE };
    }

    > input{
        width: 100%;
        height: 5.6rem;
        padding: 1.2rem;
        border: none;
        outline: none;

        color: ${ ({theme}) => theme.COLORS.WHITE };
        background-color: transparent;
        border: none;

        &::placeholder{
            color: ${ ({theme}) => theme.COLORS.GRAY_300 };
        }
    }

`;