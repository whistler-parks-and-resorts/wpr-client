import { useReducer } from "react";
import { ApplicationActions } from "./ApplicationActions";
import ApplicationState from "./ApplicationState";
import ApplicationStore from "./ApplicationStore";

export default function useCreateStore(
  initialState: ApplicationState,
  reducer: (state: ApplicationState, action: ApplicationActions) => ApplicationState
): ApplicationStore {
  const [state, dispatcher] = useReducer(reducer, initialState);

  return { state, dispatcher };
}
