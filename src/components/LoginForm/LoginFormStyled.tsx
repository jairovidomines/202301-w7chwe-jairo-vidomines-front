import styled from "styled-components";

const LoginFormstyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  width: 400px;
  height: 350px;
  border-radius: 8px;
  box-shadow: 0 0 5px 5px #eae8e8;

  .form__title {
    display: flex;
    justify-content: center;
  }

  .form__information {
    display: flex;
    flex-direction: column;
  }

  .form__label {
    padding-bottom: 5px 0;
  }

  .form__input {
    width: 100%;
    border-radius: 8px;
    border-width: 0.5px;
    border-color: #eee;
    font-size: 16px;
    margin: 10px 0;
    padding: 10px 10px;
  }

  .form__button {
    border-radius: 8px;
    background-color: #e44232;
    color: #fff;
    font-size: 16px;
    margin: 15px 0;
    padding: 10px;
    width: 100%;
  }

  .form__button:hover {
    background-color: #b93f34;
  }
`;

export default LoginFormstyled;
