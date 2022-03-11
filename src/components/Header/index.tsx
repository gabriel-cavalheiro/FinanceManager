import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

export function Header() {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="logo" />
        </header>
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}