import { useContext } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationStore, { AppContext } from "./ApplicationStore";
import IAction from "./actions/IAction";

export default function useStore(): [
  state: ApplicationState,
  dispatcher: (action: IAction) => void
] {
  const store = useContext<ApplicationStore>(AppContext);

  return [store.state, store.dispatcher];
}
