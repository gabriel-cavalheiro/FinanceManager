import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web site</td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}