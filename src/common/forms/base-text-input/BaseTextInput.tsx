import { useId } from "react";
import { eventStringValue } from "../../../utilities";
import InputControl from "../input-control/InputControl";
import InputField from "../input-field/InputField";
import Label from "../label/Label";

const BaseTextInput: React.FC<BaseTextInputProperties> = ({
  labelText,
  value,
  handleOnInput,
}: BaseTextInputProperties) => {
  const inputId = useId();

  return (
    <InputField>
      <Label id={inputId} text={labelText} />
      <InputControl>
        <input
          className="input"
          type="text"
          id={inputId}
          value={value}
          placeholder={labelText.toLocaleLowerCase()}
          onInput={(event): void => handleOnInput(eventStringValue(event))}
        />
      </InputControl>
    </InputField>
  );
};

interface BaseTextInputProperties {
  labelText: string;
  value: string;
  handleOnInput: (value: string) => void;
}

export default BaseTextInput;
