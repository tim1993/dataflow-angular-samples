import { Injectable } from "@angular/core";
import { attachAction } from "@ngxs-labs/attach-action";
import { State } from "@ngxs/store";
import { StudioService } from "projects/base-components/src/lib/studio.service";
import { GetStudio, GetStudios } from "./studio.actions";
import { getStudio, getStudios } from "./studio.handlers";
import { IStudioStateModel, studioStateModelDefault } from "./studio.state.model";

@State<IStudioStateModel>({
  name: 'Studio',
  defaults: studioStateModelDefault,
})
@Injectable()
export class StudioState {
  constructor(studioService: StudioService) {
    attachAction(StudioState, GetStudios, getStudios(studioService));
    attachAction(StudioState, GetStudio, getStudio(studioService));
  }
}
