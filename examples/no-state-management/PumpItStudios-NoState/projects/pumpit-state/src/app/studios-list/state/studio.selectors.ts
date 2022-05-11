import { Selector } from '@ngxs/store';
import { StudioState } from './studio.state';
import { IStudioStateModel } from './studio.state.model';

export class StudioSelectors {
  @Selector([StudioState])
  public static getStudios(state: IStudioStateModel) {
    return state.studios;
  }

  @Selector([StudioState])
  public static getSelectedStudio(state: IStudioStateModel) {
    return state.selectedStudio;
  }
}
