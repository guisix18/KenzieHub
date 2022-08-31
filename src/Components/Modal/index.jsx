import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../Api/Services/api";
import { useState } from "react";
import { DivModal, DivModalForm, FormModal } from "./style";

const Modal = ({setShowModal, catchTec}) => {

    const [tec, setTec] = useState([]);
    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:Token")) || "");

    const formSchema = yup.object().shape({
        title: yup.string().required("Digite alguma tecnologia!"),
        status: yup.string().required("Escolha um nível!"),
    });

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(formSchema),
    });

    const submitTec = (data) => {
        api
        .post("/users/techs", data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((response) =>  {
            setTec([...tec, response.data])
            localStorage.setItem(
                "@KenzieHub:Tech",
                JSON.stringify([...tec, response.data])
            )

            catchTec();

        }
        )
        .catch((err) => console.log(err.response))
    }

    return (
        <DivModal>
            <DivModalForm>
                <div>
                <h2>Cadastrar Tecnologia</h2>
                <span onClick={() => setShowModal(false)}>X</span>
                </div>           
            <FormModal onSubmit={handleSubmit(submitTec)}>
                <label>Nome</label>
                <input {...register("title")} placeholder="Nome Tecnologia"/>
                <label>Selecionar nível</label>
                <select {...register("status")}>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                </select>
                <button type="submit">Cadastrar</button>
            </FormModal>
            </DivModalForm>
        </DivModal>
    )
}

export default Modal;