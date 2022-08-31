import { Container, InputContainer } from "./style";

const Option = ({label, error, register, name}) => {
    return (
        <Container>
            <div>{label} {!!error && <h5>{error}</h5>}</div>
            <InputContainer errored={!!error}>
            <select {...register(name)}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>
            </select>
        </InputContainer>
        </Container>
        
    )
}

export default Option;