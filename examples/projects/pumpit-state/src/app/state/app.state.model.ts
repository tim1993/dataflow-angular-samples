import { IUser } from "projects/base-components/src/lib/models/user.model";

export interface IAppStateModel {
  isUserLoggedIn: boolean;
  user: IUser | null;
}

export const appStateModelDefault: IAppStateModel = {
  isUserLoggedIn: false,
  user: null,
};
