export class Login {
  public static readonly type = '[App] Login';

  constructor(public username: string, public password: string) {}
}

export class Logout {
  public static readonly type = '[App] Logout';

  constructor() {}
}

export class UpgradeToPremium {
  public static readonly type = '[App] UpgradeToPremium';

  constructor() {}
}
