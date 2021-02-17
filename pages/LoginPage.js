import React from "react";
import {
  Container,
  Title,
  Input,
  Wrapper,
  Button,
  Error,
} from "./LoginPage.style";
import { useState } from "react";

const LoginPage = ({ LogUserIn }) => {
  const [values, setValues] = useState({
    email: "curs@its.ro",
    pass: "parola",
  });

  function handleEmailChange(val) {
    setValues({
      ...values,
      email: val,
    });
  }

  function handlePasswordChange(val) {
    setValues({
      ...values,
      pass: val,
      error: "",
    });
  }

  function handleSubmit() {
    if (values.email === "curs@its.ro" && values.pass === "parola") {
      LogUserIn();
    } else {
      setValues({
        ...values,
        error: "Incorrect email/ password.",
      });
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Log in</Title>
        {values.error !== "" && <Error>{values.error}</Error>}
        <Input
          placeholder="Email address"
          type="email"
          value={values.email}
          onChange={(e) => handleEmailChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Input
          placeholder="Password"
          type="password"
          value={values.pass}
          onChange={(e) => handlePasswordChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <Button onClick={() => handleSubmit()}>Log me in!</Button>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
