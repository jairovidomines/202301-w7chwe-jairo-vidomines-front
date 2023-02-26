import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import GlobalStyles from "../../styles/GlobalStyles";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Social App'", () => {
      render(
        <Wrapper>
          <GlobalStyles />
          <Layout />
        </Wrapper>
      );

      const title = "Social App";

      const expectedtitle = screen.getByRole("heading", { name: title });

      expect(expectedtitle).toBeInTheDocument();
    });
  });
});
