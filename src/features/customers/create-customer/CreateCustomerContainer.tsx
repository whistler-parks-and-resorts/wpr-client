import { Column, Columns, Container, Section } from "../../../common";
import { ApplicationActions } from "../../../hooks/useStore/ApplicationActions";
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
      <button onClick={(): void => dispatcher(ApplicationActions.Brad)}>ToBrad</button>
      <button onClick={(): void => dispatcher(ApplicationActions.Mike)}>ToMike</button>
      <button onClick={(): void => dispatcher(ApplicationActions.John)}>ToJohn</button>
    </Section>
  );
};

export default CreateCustomerContainer;
