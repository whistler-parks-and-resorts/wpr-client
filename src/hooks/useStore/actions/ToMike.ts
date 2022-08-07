import { Actions } from "./Actions";
import IAction from "./IAction";

export interface ToMike extends IAction {
  action: Actions.Mike;
  payload: { username: "mike"; id: "131" };
}

export function dispatchMike(username: string, id: string): IAction {
  return {
    action: Actions.Mike,
    payload: { username, id },
  } as IAction;
}
