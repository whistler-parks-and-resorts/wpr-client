import React, { useState } from "react";
import { Box, InputControl, InputField } from "../../../common";
import { eventStringValue, ValueDefaults } from "../../../utilities";

const handleOnSubmit = (event: React.FormEvent): void => {
  console.log("I got the event", event);

  event.preventDefault();
};

const CreateCustomer: React.FC = () => {
  const [username, setUsername] = useState<string>(ValueDefaults.String);
  const [password, setPassword] = useState<string>(ValueDefaults.String);

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <InputField>
          <InputControl>
            <input
              className="input"
              type="text"
              value={username}
              onInput={(event): void => setUsername(eventStringValue(event))}
            />
          </InputControl>
        </InputField>
        <InputField>
          <InputControl>
            <input
              className="input"
              type="text"
              value={password}
              onInput={(event): void => setPassword(eventStringValue(event))}
            />
          </InputControl>
        </InputField>
        <InputField>
          <InputControl>
            <button className="button" type="submit">
              Submit
            </button>
          </InputControl>
        </InputField>
      </form>
    </Box>
  );
};

export default CreateCustomer;
