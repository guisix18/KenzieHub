import { DivTecContainer, DivTec } from "./style";

const CardTec = ({ getTecs }) => {
    return (
        <DivTecContainer>
            {getTecs.length > 0 ? getTecs.map((tec) => {
                return <DivTec key={tec.id}>
                    <h3>{tec.title}</h3>
                    <p>{tec.status}</p>
                </DivTec>
            }) : <DivTec>
                    <h3>Digite aqui uma tecnologia</h3>
                </DivTec>}
            </DivTecContainer>
    )
}

export default CardTec;