import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import api from "../../Api/Services/api";
import CardTec from "../../Components/CardTec";
import Modal from "../../Components/Modal";
import { Container, Nav, ContainerUser, TecHead, DivTecContainer } from "./style";

const Home = ({ authenticated, setAuthenticated }) => {

    const history = useHistory();

    const catchTec = () => {
        api
        .get(`/users/${user.id}`)
        .then((response) => setGetTecs(response.data.techs))
    }

    useEffect(() => {
        catchTec();
    }, [])

    const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

    const [showModal, setShowModal] = useState(false);
    const [getTecs, setGetTecs] = useState(localStorage.getItem("@KenzieHub:Tech") ? JSON.parse(localStorage.getItem("@KenzieHub:Tech")) : "");

    const backToLogin = () => {
        localStorage.clear();
        setAuthenticated(false);
        history.push("/");
    }

    return authenticated ? (
        <Container>
            {showModal && <Modal setShowModal={setShowModal} catchTec={catchTec} />}
        <Nav>
            <ul>
            <li>
                <h1>KenzieHub</h1>
            </li>
            <li>
                <button onClick={backToLogin}>Sair</button>
            </li>
            </ul>
        </Nav>

        <ContainerUser>
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
        </ContainerUser>

        <section>
            <TecHead>
                <h2>Tecnologias</h2>
                <button onClick={() => setShowModal(true)}>+</button>
            </TecHead>

            <DivTecContainer>
                <CardTec getTecs={getTecs}/>
            </DivTecContainer>
            

        </section>

        </Container>
    ) : <Redirect to="/" />
}

export default Home;