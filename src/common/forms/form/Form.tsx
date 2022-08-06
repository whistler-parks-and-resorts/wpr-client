import Box from "../../elements/box/Box";
import RequiredChildren from "../../interfaces/RequiredChildren";
import SubmitButton from "../submit-button/SubmitButton";

const handleOnSubmit = (event: React.FormEvent): void => {
  event.preventDefault();
};

const Form: React.FC<FormProperties> = ({ children, routeTo }: FormProperties) => {
  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        {children}
        <SubmitButton />
      </form>
    </Box>
  );
};

interface FormProperties extends RequiredChildren {
  routeTo: string;
}

export default Form;
