import React, { useState } from "react";
import { BaseTextInput, Form } from "../../../common";
import useAuth from "../../../hooks/useAuth/UseAuth";
import { ValueDefaults } from "../../../utilities";
import { customerRequest } from "./CreateCustomerRequest";

const CreateCustomer: React.FC = () => {
  const [username, setUsername] = useState<string>(ValueDefaults.String);
  const [password, setPassword] = useState<string>(ValueDefaults.String);
  const auth = useAuth();

  const submit = (): void => {
    const request = customerRequest(username, password);

    auth.signIn(request);
  };

  return (
    <Form callback={submit}>
      <BaseTextInput labelText="Username" value={username} handleOnInput={setUsername} />
      <BaseTextInput labelText="Password" value={password} handleOnInput={setPassword} />
    </Form>
  );
};

export default CreateCustomer;
