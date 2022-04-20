import { AccountStatus, IUser } from '../models/user.model';

const users: IUser[] = [
  {
    username: 'pumpit',
    mail: 'pum@p.it',
    status: AccountStatus.Free,
    address: {
      code: '1337',
      str: 'Pumplane',
      nr: '3',
      county: 'Pumpia',
    },
  },
  {
    username: 'pumperino',
    mail: 'pumer@i.no',
    status: AccountStatus.P1,
    address: {
      code: '1337',
      str: 'Pumplane',
      nr: '3',
      county: 'Pumpia',
    },
  },
];

export { users };
