import { useEffect } from "react";
import { Container } from "./styled";

import {api} from '../../services';
export const TransactionsTable = () => {
  useEffect(() => {
    api.get("transactions")
      .then(response => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">-R$ 59,00</td>
            <td>Alimentação</td>
            <td>20/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
