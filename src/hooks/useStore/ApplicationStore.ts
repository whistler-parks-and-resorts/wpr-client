import { createContext } from "react";
import { ApplicationActions } from "./ApplicationActions";
import ApplicationState, { defaultApplicationState } from "./ApplicationState";

export default interface ApplicationStore {
  state: ApplicationState;
  dispatcher: (action: ApplicationActions) => void;
}

export function defaultContext(): ApplicationStore {
  return {
    state: defaultApplicationState(),
    dispatcher: (): void => {
      return;
    },
  };
}

export const AppContext = createContext(defaultContext());
