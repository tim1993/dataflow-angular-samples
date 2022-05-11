import { Injectable } from "@angular/core";
import { attachAction } from "@ngxs-labs/attach-action";
import { State } from "@ngxs/store";
import { AuthenticationService } from "../authentication.service";
import { Login, Logout, UpgradeToPremium } from "./app.actions";
import { login, logout, upgradeToPremium } from "./app.handlers";
import { appStateModelDefault, IAppStateModel } from "./app.state.model";

@State<IAppStateModel>({
  name: 'App',
  defaults: appStateModelDefault,
})
@Injectable()
export class AppState {
  constructor(authService: AuthenticationService) {
    attachAction(AppState, Login, login(authService));
    attachAction(AppState, UpgradeToPremium, upgradeToPremium(authService));
    attachAction(AppState, Logout, logout(authService));
  }
}
