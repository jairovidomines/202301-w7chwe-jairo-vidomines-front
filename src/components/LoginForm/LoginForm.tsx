import { useState } from "react";
import useUser from "../../hooks/useUser";
import LoginFormstyled from "./LoginFormStyled";

const LoginForm = (): JSX.Element => {
  const { loginUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const areaFieldsEmpty = username === "" || password === "";

  const handleUsername = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePassword = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await loginUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <LoginFormstyled onSubmit={onSubmitHandler}>
      <h2 className="form__title">Log in</h2>
      <div className="form__information">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="username"
          id="username"
          onChange={handleUsername}
          value={username}
        ></input>
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          onChange={handlePassword}
          value={password}
        ></input>
        <button
          className="form__button"
          type="submit"
          disabled={areaFieldsEmpty}
        >
          Log in
        </button>
      </div>
    </LoginFormstyled>
  );
};

export default LoginForm;
