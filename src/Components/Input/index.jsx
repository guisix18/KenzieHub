import { Container, InputContainer } from "./style";

const Input = ({label, type, placeholder, register, name, error}) => {

    return (
        <Container>
            <div>{label} {!!error && <h5>{error}</h5>}</div>
            <InputContainer errored={!!error}>
                <input {...register(name)} type={type} placeholder={placeholder}/>
            </InputContainer>
        </Container>
    )
}

export default Input;