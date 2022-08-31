import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    h1 {
        color: var(--red);
    }

    section {
        display: flex;
        align-items: center;

        h1 {
            margin: 0 30px 0 0;
        }

        button {
            background-color: var(--grey3);
            color: var(--grey0);
            padding: 10px;
            border: 1px solid var(--grey3);
            border-radius: 5px;
            margin: 0 0 0 30px;
        }

    }


`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 25px 25px 50px 25px;
    border-radius: 5px;
    background-color: var(--grey3);

    @media(max-width: 315px) {
        width: 95vw;
    }

    h2 {
        margin: 18px 0;
        color: var(--grey0);
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    @media(max-width: 315px) {
        width: 85vw;
    }

    p {
        color: var(--grey1);
        margin: 0 0 30px 0;
        text-align: center;
    }

`