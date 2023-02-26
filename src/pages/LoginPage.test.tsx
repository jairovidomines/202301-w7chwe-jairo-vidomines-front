import { render, screen } from "@testing-library/react";
import Wrapper from "../mocks/Wrapper";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with text 'Log in'", () => {
      render(
        <Wrapper>
          <LoginPage />
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
