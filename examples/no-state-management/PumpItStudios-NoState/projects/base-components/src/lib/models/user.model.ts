export interface IUser {
  mail: string;
  username: string;
  status: AccountStatus;
  address?: IAddress;
}

export enum AccountStatus {
  Free,
  P1,
  P2,
}

export interface IAddress {
  str: string;
  nr: string;
  code: string;
  county: string;
}
