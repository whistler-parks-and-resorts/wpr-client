import { Column, Columns, Container, Section } from "../../../common";
import { dispatchMike } from "../../../hooks/useStore/actions/ToMike";
import useStore from "../../../hooks/useStore/UseStore";
import CreateCustomer from "./CreateCustomer";

const CreateCustomerContainer: React.FC = () => {
  const [state, dispatcher] = useStore();

  return (
    <Section>
      <Container>
        <Columns>
          <Column />
          <Column>
            <CreateCustomer />
          </Column>
          <Column />
        </Columns>
      </Container>
      <p>
        LoggedIn: {state.userId} - {state.username} -{!state.isLoggedIn ? "false" : "true"}
      </p>
      {/* <button onClick={(): void => dispatcher(Actions.Brad)}>ToBrad</button> */}
      <button onClick={(): void => dispatcher(dispatchMike("mikey", "123123"))}>ToMike</button>
      {/* <button onClick={(): void => dispatcher(Actions.John)}>ToJohn</button> */}
    </Section>
  );
};

export default CreateCustomerContainer;
