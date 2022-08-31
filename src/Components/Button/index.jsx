import { ContainerButton, Button } from "./style";

const Buttons = ({children, color, ...rest}) => {
    return (
        <ContainerButton>
            <Button {...rest} color={color}>{children}</Button>
        </ContainerButton>
    )
}

export default Buttons;