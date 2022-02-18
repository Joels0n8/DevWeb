import { Container, Content } from './styles'
import { ButtonFind } from '../ButtonFind'

interface HeaderProps{
    onOpenNewTransactionModal: () => void;

}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <ButtonFind/> 
            </Content>
        </Container>
    )
}