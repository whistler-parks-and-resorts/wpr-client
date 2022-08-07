import { useContext } from "react";
import { ApplicationActions } from "./ApplicationActions";
import ApplicationState from "./ApplicationState";
import ApplicationStore, { AppContext } from "./ApplicationStore";

export default function useStore(): [
  state: ApplicationState,
  dispatcher: (action: ApplicationActions) => void
] {
  const store = useContext<ApplicationStore>(AppContext);

  return [store.state, store.dispatcher];
}
