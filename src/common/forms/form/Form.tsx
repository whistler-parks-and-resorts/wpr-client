import Box from "../../elements/box/Box";
import RequiredChildren from "../../interfaces/RequiredChildren";
import SubmitButton from "../submit-button/SubmitButton";

const Form: React.FC<FormProperties> = ({ children, callback }: FormProperties) => {
  const handleOnSubmit = (event: React.FormEvent): void => {
    callback();

    event.preventDefault();
  };

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
  callback: () => void;
}

export default Form;
