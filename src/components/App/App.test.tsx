import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import App from "./App";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading of level 1 with the title 'Social App'", () => {
      render(
        <Wrapper>
          <App />
        </Wrapper>
      );

      const title = "Social App";

      const expectedTitle = screen.getByRole("heading", {
        level: 1,
        name: title,
      });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
