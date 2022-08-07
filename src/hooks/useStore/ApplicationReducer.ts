import { Actions } from "./actions/Actions";
import { ToMike } from "./actions/ToMike";
import ApplicationState from "./ApplicationState";
import IAction from "./actions/IAction";

export default function applicationReducer(
  state: ApplicationState,
  action: IAction
): ApplicationState {
  switch (action.action) {
    case Actions.Mike: {
      const mike = action as ToMike;
      return { ...state, username: mike.payload.username, userId: mike.payload.id };
    }
    case Actions.John:
      return { ...state, username: "john" };
    case Actions.Brad:
      return { ...state, username: "brad" };
    default:
      return state;
  }
}
