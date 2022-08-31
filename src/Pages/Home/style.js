import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Nav = styled.nav`

    margin: 50px 0;

    ul {
        display: flex;
        justify-content: center;

        @media(min-width: 600px) {
        display: flex;
        justify-content: space-around;
    }

    }

    li {
        list-style: none;
        margin: 0 15px;

        h1 {
            color: var(--red);
        }

        button {
            background-color: var(--grey3);
            border: 1px solid var(--grey3);
            padding: 5px;
            border-radius: 5px;
        }

    }

    

`

export const ContainerUser = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0 25px 0;

    @media(min-width: 600px) {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }    

    h2 {
        margin: 6px 0;
        color: var(--grey0);
        text-align: left;
    }

    p {
        color: var(--grey1);
        font-size: 12px;
        font-weight: 300;
        text-align: left;
    }

`

export const TecHead = styled.div`

    display: flex;
    justify-content: space-around;
    margin: 40px 0;

    h2 {
        color: var(--grey0);
    }

    button {
        border: 1px solid var(--grey3);
        background-color: var(--grey3);
        padding: 5px;
        border-radius: 5px;
    }

    @media(min-width: 600px) {
        button {
            font-size: 20px;
        }
    }

`

export const DivTecContainer = styled.div`
    background-color: var(--grey2);
    width: 95%;
    padding: 5px;
    margin: 0 auto;
    border-radius: 5px;
`

export const DivTec = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: var(--grey4);
    border-radius: 5px;
    padding: 5px;
    margin: 10px 0;
    border: 1px solid black;

    h3 {
        color: var(--grey0);
    }

    p {
        color: var(--grey1);
    }

`