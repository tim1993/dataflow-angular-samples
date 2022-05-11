import { StateContext } from '@ngxs/store';
import { switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Login, Logout, UpgradeToPremium } from './app.actions';
import { IAppStateModel } from './app.state.model';

export const login =
  (authService: AuthenticationService) =>
  ({ patchState }: StateContext<IAppStateModel>, action: Login) => {
    return authService.login(action.username, action.password).pipe(
      tap((user) => {
        patchState({
          isUserLoggedIn: true,
          user: user,
        });
      })
    );
  };

export const logout =
  (authService: AuthenticationService) =>
  ({ patchState }: StateContext<IAppStateModel>, _: Logout) => {
    authService.logout();
    return patchState({
      isUserLoggedIn: false,
      user: null,
    });
  };

export const upgradeToPremium =
  (authService: AuthenticationService) =>
  ({ patchState }: StateContext<IAppStateModel>, _: UpgradeToPremium) => {
    return authService.updateToPremium().pipe(
      switchMap(() =>
        authService.getUser().pipe(
          tap((user) => {
            patchState({
              user,
            });
          })
        )
      )
    );
  };
