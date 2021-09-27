import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTables";

export function Dashboard(){
  return (
    <Container>
      <Summary />
      <TransactionTable/>
  </Container>
  );
}
