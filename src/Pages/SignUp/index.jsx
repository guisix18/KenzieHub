import { Container, ContainerForm, Form } from "./style";
import Input from "../../Components/Input";
import Buttons from "../../Components/Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Api/Services/api";
import Option from "../../Components/Option";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";


const SignUp = ({ authenticated }) => { 

    const history = useHistory();
    
    const formSchema = yup.object().shape({
        name: yup.string().required("Digite seu nome, por favor"),
        email: yup.string().email().required("E-mail obrigatório!"),
        password: yup.string().min(8, "Senha deve ter no mínimo oito caractéres").required("Senha obrigatória!"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required("Precisa confirmar a senha!"),
        course_module: yup.string().required("É necessário selecionar um módulo!"),
    });

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchema),
    });


    const submitForm = (data) => {
       delete data.confirmPassword;
       data.bio = " ";
       data.contact = " ";
       api
       .post("/users", data)
       .then((_) => {
        toast.success("Sucesso ao criar a conta!")
        return history.push("/")
       }) 
       .catch((_) => toast.error("Erro ao criar a conta, talvez esse e-mail já foi utilizado. Verifique todas suas informações"));
    }

    if (authenticated) {
        return <Redirect to="/home"/>
    }

    const backToLogin = () => {
        history.push("/");
    }

    return (
        <Container>
            <section>
            <h1>KenzieHub</h1>
            <button onClick={backToLogin}>Voltar</button>
            </section>
            <ContainerForm>
                <h2>Crie sua conta</h2>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <p>Rápido e grátis, vamos nessa!</p>
                <Input label="Nome" type="text" placeholder="Digite aqui seu nome" register={register} name="name" error={errors.name?.message}/>

                <Input label="Email" type="email" placeholder="Digite aqui seu email" register={register} name="email" error={errors.email?.message}/>

                <Input label="Senha" type="password" placeholder="Digite aqui sua senha" register={register} name="password" error={errors.password?.message}/>

                <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" register={register} name="confirmPassword" error={errors.confirmPassword?.message}/>

                <Option label="Selecionar Módulo" error={errors.course_module?.message} register={register} name="course_module"/>

                <Buttons>Cadastrar</Buttons>
                </Form>
            </ContainerForm>
        </Container>
    )
}

export default SignUp;