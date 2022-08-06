import { Column, Columns, Container, Section } from "../../../common";
import CreateCustomer from "./CreateCustomer";

const CreateCustomerContainer: React.FC = () => {
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
    </Section>
  );
};

export default CreateCustomerContainer;
