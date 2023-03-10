import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with 'Log in' text", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const buttonText = "Log in";

      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
