import { ApplicationActions } from "./ApplicationActions";
import ApplicationState from "./ApplicationState";

export default function applicationReducer(
  state: ApplicationState,
  action: ApplicationActions
): ApplicationState {
  switch (action) {
    case ApplicationActions.Mike:
      return { ...state, username: "mike" };
    case ApplicationActions.John:
      return { ...state, username: "john" };
    case ApplicationActions.Brad:
      return { ...state, username: "brad" };
    default:
      return state;
  }
}
