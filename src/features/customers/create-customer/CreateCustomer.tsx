import React, { useState } from "react";
import { BaseTextInput, Box, SubmitButton } from "../../../common";
import { ValueDefaults } from "../../../utilities";
import HttpClient from "../../../utilities/data/HttpClient";
import { customerRequest } from "./CreateCustomerRequest";

const CreateCustomer: React.FC = () => {
  const [username, setUsername] = useState<string>(ValueDefaults.String);
  const [password, setPassword] = useState<string>(ValueDefaults.String);

  const handleOnSubmit = (event: React.FormEvent): void => {
    const request = customerRequest(username, password);

    const result = HttpClient.instance()
      .createCustomer(request)
      .then((response) => response.id);

    console.log(result);

    event.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={handleOnSubmit}>
        <BaseTextInput labelText="Username" value={username} handleOnInput={setUsername} />
        <BaseTextInput labelText="Password" value={password} handleOnInput={setPassword} />
        <SubmitButton />
      </form>
    </Box>
  );
};

export default CreateCustomer;
