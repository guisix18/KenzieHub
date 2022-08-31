import { Container, ContainerForm, Form } from "./style";
import Input from "../../Components/Input";
import Buttons from "../../Components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../../Api/Services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Login = ({ authenticated, setAuthenticated }) => {

    const history = useHistory();

    const formSchema = yup.object().shape({
        email: yup.string().email().required("E-mail obrigatório!"),
        password: yup.string().min(8, "Senha deve ter no mínimo oito caractéres").required("Senha obrigatória!"),
    });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
    });

    const formSubmit = (data) => {
        api.post("/sessions", data).then((response) => {
            const { token, user } = response.data;

            localStorage.setItem("@KenzieHub:Token", JSON.stringify(token));

            localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

            setAuthenticated(true);

            return history.push("/home");
        }).catch((_) => toast.error("Email ou senha incorretos!"));

        if (authenticated) {
            return <Redirect to="/home" />
        }

    }

    const toRegister = () => {
        history.push("/signup");
    }

    return (
        <Container>
        <h1>KenzieHub</h1>
        <ContainerForm>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit(formSubmit)}>
                <Input label="Email" type="email" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>
                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" register={register} name="password" error={errors.password?.message}/>
                <Buttons color={+true}>Entrar</Buttons>
                <p>Ainda não possui uma conta?</p>
                <Buttons onClick={() => toRegister()} toRegister={toRegister}>Cadastre-se</Buttons>
            </Form>
        </ContainerForm>
        </Container>
    )
}

export default Login;