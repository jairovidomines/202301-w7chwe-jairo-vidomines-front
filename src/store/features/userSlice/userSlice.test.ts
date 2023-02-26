import { User, UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

const initialState: UserState = {
  username: "",
  token: "",
  isLogged: false,
  id: "",
};

describe("Given a user reducer", () => {
  describe("When it receives an action to log a user", () => {
    test("Then it should return the property isLogged as true", () => {
      const user: User = {
        username: "Jairo",
        token: "jairo1020304050",
        id: "",
      };

      const expectedUserState: UserState = {
        username: "Jairo",
        token: "jairo1020304050",
        isLogged: true,
        id: "",
      };

      const loginUserAction = loginUserActionCreator(user);
      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });

  describe("When it receives an action to logout a user", () => {
    test("Then it should return the property isLogged as false", () => {
      const logoutUserAction = logoutUserActionCreator();

      const newUserState = userReducer(initialState, logoutUserAction);

      expect(newUserState).toStrictEqual(initialState);
    });
  });
});
