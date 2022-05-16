import { StateContext } from '@ngxs/store';
import { StudioService } from 'projects/base-components/src/lib/studio.service';
import { tap } from 'rxjs';
import { GetStudio, GetStudios } from './studio.actions';
import { IStudioStateModel } from './studio.state.model';

export const getStudios =
  (studioService: StudioService) =>
  ({ patchState }: StateContext<IStudioStateModel>, _: GetStudios) => {
    return studioService.get().pipe(
      tap((studios) => {
        patchState({
          studios,
        });
      })
    );
  };

export const getStudio =
  (studioService: StudioService) =>
  ({ patchState }: StateContext<IStudioStateModel>, action: GetStudio) => {
    return studioService.details(action.studioId).pipe(
      tap((studio) => {
        patchState({
          selectedStudio: studio,
        });
      })
    );
  };
