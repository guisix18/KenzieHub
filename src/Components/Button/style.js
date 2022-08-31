import styled from "styled-components";


export const ContainerButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
    color: var(--grey0);
    background-color: ${(props) => (props.color ? "#ff577f" : "#868e96")};
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    border: 1px solid ${(props) => (props.color ? "#ff5777" : "#868e96")};
`