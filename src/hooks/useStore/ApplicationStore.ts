import { createContext } from "react";
import ApplicationState, { defaultApplicationState } from "./ApplicationState";
import IAction from "./actions/IAction";

export default interface ApplicationStore {
  state: ApplicationState;
  dispatcher: (action: IAction) => void;
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
