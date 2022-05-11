import { Studio } from "projects/base-components/src/lib/models/studio.model";

export interface IStudioStateModel {
  studios: Studio[];
  selectedStudio: Studio | null;
}

export const studioStateModelDefault: IStudioStateModel = {
  studios: [],
  selectedStudio: null,
};
