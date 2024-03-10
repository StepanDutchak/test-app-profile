import {IStore} from 'types/store';

export const selectUser = (state: IStore) => state.user.user;
