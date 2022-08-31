import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
    div {
        color: var(--grey0);

        h5 {
            color: var(--feedNegative);
        }

    }

`

export const InputContainer = styled.div`

    ${props => props.errored && css`
        border-color: var(--feedNegative);
    `}

    select {
        font-size: 12.5px;
        color: var(--grey0);
        margin: 8px 0 18px 0;
        background-color: var(--grey2);
        padding: 10px;
        border: 1px solid var(--grey0);
        border-radius: 5px;

        @media(max-width: 315px) {
        width: 85vw;
    }

    }

`