import { Selector } from '@ngxs/store';
import { AppState } from './app.state';
import { IAppStateModel } from './app.state.model';

export class AppSelectors {
  @Selector([AppState])
  public static isUserLoggedIn(state: IAppStateModel) {
    return state.isUserLoggedIn;
  }

  @Selector([AppState])
  public static getUser(state: IAppStateModel) {
    return state.user;
  }
}
