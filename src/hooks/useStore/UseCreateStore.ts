import { useReducer } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationStore from "./ApplicationStore";
import IAction from "./actions/IAction";

export default function useCreateStore(
  initialState: ApplicationState,
  reducer: (state: ApplicationState, action: IAction) => ApplicationState
): ApplicationStore {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return { state, dispatcher };
}
