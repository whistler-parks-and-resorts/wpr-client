import React, { useId, useState } from "react";
import { Box, InputControl, InputField, SubmitButton } from "../../../common";
import { eventStringValue, ValueDefaults } from "../../../utilities";

const handleOnSubmit = (event: React.FormEvent): void => {
  console.log("I got the event", event);

  event.preventDefault();
};

const CreateCustomer: React.FC = () => {
  const usernameId = useId();
  const [username, setUsername] = useState<string>(ValueDefaults.String);

  const passwordId = useId();
  const [password, setPassword] = useState<string>(ValueDefaults.String);

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <InputField>
          <label className="label" htmlFor={usernameId}>
            Username:
          </label>
          <InputControl>
            <input
              id={usernameId}
              className="input"
              type="text"
              value={username}
              onInput={(event): void => setUsername(eventStringValue(event))}
            />
          </InputControl>
        </InputField>
        <InputField>
          <label className="label" htmlFor={passwordId}>
            Password:
          </label>
          <InputControl>
            <input
              id={passwordId}
              className="input"
              type="text"
              value={password}
              onInput={(event): void => setPassword(eventStringValue(event))}
            />
          </InputControl>
        </InputField>
        <SubmitButton />
      </form>
    </Box>
  );
};

export default CreateCustomer;
