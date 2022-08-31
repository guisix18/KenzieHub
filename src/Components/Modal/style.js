import styled from "styled-components"

export const DivModal = styled.div`

    position: fixed;
    top: 50%;
    left: 9%;
    background-color: var(--grey3);
    border-radius: 5px;

    @media(min-width: 600px) {
        top: 10%;
        left: 40%;
    }

`

export const DivModalForm = styled.div`

    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        background-color: var(--grey2);
        padding: 12px;

        h2 {
            color: var(--grey0);
        }

        span {
        cursor: pointer;
        margin-left: 30px;
        display: inline-block;
        color: var(--grey0);
    
    }

    }


`


export const FormModal = styled.form`

    display: flex;
    flex-direction: column;
    padding: 12px;

    input {
        margin: 8px 0 18px 0;
        background-color: var(--grey2);
        padding: 10px;
        border: 1px solid var(--grey0);
        border-radius: 5px;
    }

    select {
        font-size: 12.5px;
        color: var(--grey0);
        margin: 8px 0 18px 0;
        background-color: var(--grey2);
        padding: 10px;
        border: 1px solid var(--grey0);
        border-radius: 5px;
    } 
    
    button {
        color: var(--grey0);
        padding: 10px;
        border-radius: 5px;
        width: 100%;
        background-color: var(--red);
        border: 1px solid var(--red);
    }

`