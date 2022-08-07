import { ValueDefaults } from "../../utilities";

export default interface ApplicationState {
  isLoggedIn: boolean;
  userId: string;
  username: string;
}

export function defaultApplicationState(): ApplicationState {
  return {
    isLoggedIn: ValueDefaults.Boolean,
    userId: "231",
    username: "mikeb",
  };
}
