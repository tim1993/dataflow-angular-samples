
export class GetStudios {
  public static readonly type = '[Studio] GetStudios';

  constructor() {}
}

export class GetStudio {
  public static readonly type = '[Studio] GetStudio';

  constructor(public studioId: number) {}
}
