import Button from "../../elements/button/Button";
import InputControl from "../input-control/InputControl";
import InputField from "../input-field/InputField";

const SubmitButton: React.FC = () => {
  return (
    <InputField>
      <InputControl>
        <Button type="submit" text="Submit" />
      </InputControl>
    </InputField>
  );
};

export default SubmitButton;
